# **App Name**: LaVieAI Hair Advisor

## Core Features:

- AI Hair Consultation: Provide personalized hair care advice and product recommendations based on user input using a tool with Gemini.
- Product Recommendations: Recommend specific Lavie Cosmetics products based on user's hair type and concerns, drawing from the product catalog.
- Chat Interface: Display a conversational interface for users to interact with the AI hair consultant, showing messages from both the user and the AI.
- Floating Chat Button: A floating button that triggers the AI hair consultation chat modal.
- Chat History: Maintain and utilize conversation history to provide personalized and relevant follow-up recommendations.

## Style Guidelines:

- Primary color: Pink.
- Secondary color: Black.
- Tertiary color: White.
- Quaternary color: Gray.
- All titles in pink.
- [Browser / Client] Next.js App (App Router + TypeScript)
- Public pages (/, /shop, /product/[id], /about, /contact, /privacy-policy, /terms)
- User pages (/cart, /checkout, /account, /account/orders, /account/profile)
- Admin pages (/admin, /admin/products, /admin/orders)
- Next.js يتكلم مع: [Firebase]
- Firebase Authentication User login / signup / session
- Cloud Firestore products, users, carts, orders
- Firebase Storage product images
- Cloud Functions (Node/TypeScript) createPaymentSession (calls Egyptian payment gateway API), paymentWebhook (receives payment confirmation), adjustStockAndOrderStatus
- [Payment Gateway in Egypt] Paymob / Fawry / Amazon Payment Services / PayPal
- Redirect / widget from checkout page Webhook → Cloud Function → Firestore (updates paymentStatus + stock)