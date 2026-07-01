import MerchantApp from './MerchantApp'

// The live app inside a realistic phone device frame, shown in the landing hero.
// Fully interactive — tapping the bottom nav / quick actions switches screens
// inside the phone (state-based, so it never touches the landing page URL).
export default function AppDemo() {
  return (
    <div className="hero-phone-scale">
      <div className="hero-phone" role="group" aria-label="Live PayLedger AI merchant app">
        <span className="hero-phone-notch" aria-hidden="true" />
        <div className="hero-phone-screen">
          <MerchantApp />
        </div>
      </div>
    </div>
  )
}
