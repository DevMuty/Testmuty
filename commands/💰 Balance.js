/*CMD
  command: 💰 Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /balance
CMD*/

var data_user = Bot.getProperty("user")
var security = data_user.list[user.telegramid]
if (!security) {
  var url = Libs.Webhooks.getUrlFor({
    command: "onWebhook",
    user_id: user.id
  })
  var webPage =
    "https://api.jobians.top/captcha/pro?id=d6a37&webhookUrl=" +
    encodeURIComponent(url) +
    "&back=https://t.me/Crypto_Ad_RoBot"
  Bot.sendInlineKeyboard(
    [[{ title: "✅ Verify", url: webPage }]],
    "⚠️ *You have to complete the verification process to use this section*!\n\nPress ✅* Verify* button to complete the verification process",
    { disable_web_page_preview: true }
  )
  return
}
var cur = Bot.getProperty("admin_currency")
var payout = Libs.ResourcesLib.userRes("payout")
var balance = Libs.ResourcesLib.userRes("balance")
var plus = balance.value() + payout.value()
var nega = payout.value()
Bot.sendKeyboard(
  "➕ Deposit,➖ Withdraw\n🏠 Menu",
  "🔸️ *Balance*\n     " +
    plus.toFixed(10) +
    " " +
    cur +
    "!\n🔸️ *Available for payout*\n     " +
    nega.toFixed(5) +
    " " +
    cur +
    "\n*________________________________*\nClick《Deposit》to generate a unique wallet address.\n\n💱 *Top-up Methods*\n• Crypto currency"
)

