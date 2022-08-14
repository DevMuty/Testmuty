/*CMD
  command: /checking
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💡 More
  answer: 
  keyboard: 
  aliases: 
CMD*/

var payout = Libs.ResourcesLib.userRes("payout")
if (params == 1) {
  var dudu = Libs.ResourcesLib.userRes("dudu")
  if (dudu.value() < 10) {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "✅ Completed " + dudu.value() + "/10",
      show_alert: false
    })
    return
  }
  payout.add(+0.005)
  dudu.add(-10)
  Bot.sendMessage("You earned *0.005 USD* for task earn!")
  return
}
if (params == 2) {
  var dede = Libs.ResourcesLib.userRes("dede")
  if (dede.value() < 5) {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "✅ Completed " + dede.value() + "/5",
      show_alert: false
    })
    return
  }
  payout.add(+0.001)
  dede.add(-5)
  Bot.sendMessage("You earned *0.001 USD* for task earn!")
  return
}
if (params == 3) {
  function canRun() {
    var last_run_at = User.getProperty("last_run_at_daily")
    if (!last_run_at) {
      return true
    }

    var minutes = (Date.now() - last_run_at) / 1000 / 60

    var minutes_in_day = 24 * 60
    var next = minutes_in_day - minutes
    var wait_hours = Math.floor(next / 60)
    next -= wait_hours * 60
    var wait_minutes = Math.floor(next)
    var seconds = Math.floor((next - wait_minutes) * 60)
    if (minutes < minutes_in_day) {
      Api.answerCallbackQuery({
        callback_query_id: request.id,
        text: "come back tomorrow!",
        show_alert: false
      })
      //come
      return
    }
    return true
  }

  if (!canRun()) {
    return
  }
  User.setProperty("last_run_at_daily", Date.now(), "integer")

  payout.add(+0.0005)
  Bot.sendMessage("You earned *0.0005 USD* for task earn!")
  return
}
