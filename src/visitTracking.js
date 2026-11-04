const visitorKey = 'kadrx-social:visitor-id'
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
let tracked = false

function createVisitorId() {
  if (typeof crypto.randomUUID === 'function') return crypto.randomUUID()

  // getRandomValues also works when randomUUID is unavailable on HTTP.
  const bytes = crypto.getRandomValues(new Uint8Array(16))
  bytes[6] = (bytes[6] & 0x0f) | 0x40
  bytes[8] = (bytes[8] & 0x3f) | 0x80
  const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('')
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
}

function getVisitorId() {
  let visitorId
  try {
    visitorId = localStorage.getItem(visitorKey)
  } catch {
    // Tracking can still work for this page when browser storage is blocked.
  }
  if (uuidPattern.test(visitorId ?? '')) return visitorId

  visitorId = createVisitorId()
  try {
    localStorage.setItem(visitorKey, visitorId)
  } catch {
    // Without persistent storage a later visit may count as a new visitor.
  }
  return visitorId
}

export function trackVisit(
  apiBaseUrl = import.meta.env.VITE_API_BASE_URL
    || (import.meta.env.DEV ? 'http://127.0.0.1:8000/api' : ''),
) {
  if (tracked || !apiBaseUrl) return
  tracked = true

  try {
    void fetch(`${apiBaseUrl.replace(/\/+$/, '')}/visits`, {
      method: 'POST',
      credentials: 'omit',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ visitor_id: getVisitorId(), site: 'social' }),
      keepalive: true,
    }).catch(() => { })
  } catch {
    // Analytics failures must not interrupt the contact page.
  }
}
