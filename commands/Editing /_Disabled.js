/*CMD
  command: /Disabled
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Editing 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  return
}
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Disabled 🚫",
  show_alert: false
})
var ads = Bot.getProperty("all_in_ads")
var cur = Bot.getProperty("admin_currency")
var number_ads = params.split(" ")[1]
var same = params.split(" ")[0]
var json = ads.list[number_ads]
if (same == "bot") {
  var button = [
    [
      { text: "✏️ Edit", callback_data: "/edit bot " + json.ads },
      { text: "✅ Enable", callback_data: "/Enabled bot " + json.ads }
    ]
  ]
  var text =
    "*Campaign #" +
    json.ads +
    "* - Bot 🤖\n\n*Title*: " +
    json.title +
    "\n*Description*: " +
    json.description +
    "\n\n*Bot*: *@" +
    json.name +
    "\nURL*: *" +
    json.link +
    "\nStatus*: Disabled 🚫\n\n*Daily budget*: " +
    json.budget +
    " " +
    cur +
    "\n*CPC*: " +
    json.cpc +
    " " +
    cur +
    "\n*Clicks*: " +
    json.total +
    " total / " +
    json.clicks +
    " today"
  Api.editMessageText({
    message_id: request.message.message_id,
    text: text,
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: button
    }
  })
  var add = Bot.getProperty("all_in_ads", { list: {} })
  add.list[number_ads] = {
    ads: json.ads,
    name: json.name,
    link: json.link,
    title: json.title,
    description: json.description,
    cpc: json.cpc,
    budget: json.budget,
    clicks: json.clicks,
    total: json.total,
    status: "Disabled 🚫",
    owner: json.owner,
    promotion: json.promotion
  }
  Bot.setProperty("all_in_ads", add, "json")
  return
}
//visit
if (same == "visit") {
  var button = [
    [
      { text: "✏️ Edit", callback_data: "/edit visit " + json.ads },
      { text: "✅ Enable", callback_data: "/Enabled visit " + json.ads }
    ]
  ]
  var text =
    "*Campaign #" +
    json.ads +
    "* - Link URL 🔗\n\n*Title*: " +
    json.title +
    "\n*Description*: " +
    json.description +
    "\n\n*URL*: *" +
    json.link +
    "\nStatus*: Disabled 🚫\n\n*Daily budget*: " +
    json.budget +
    " " +
    cur +
    "\n*CPC*: " +
    json.cpc +
    " " +
    cur +
    "\n*Clicks*: " +
    json.total +
    " total / " +
    json.clicks +
    " today"
  Api.editMessageText({
    message_id: request.message.message_id,
    text: text,
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: button
    }
  })
  var add = Bot.getProperty("all_in_ads", { list: {} })
  add.list[number_ads] = {
    ads: json.ads,
    link: json.link,
    title: json.title,
    description: json.description,
    cpc: json.cpc,
    budget: json.budget,
    clicks: json.clicks,
    total: json.total,
    status: "Disabled 🚫",
    owner: json.owner,
    promotion: json.promotion
  }
  Bot.setProperty("all_in_ads", add, "json")
  return
}
//join chat
if (same == "join") {
  var button = [
    [
      { text: "✏️ Edit", callback_data: "/edit join " + json.ads },
      { text: "✅ Enable", callback_data: "/Enabled join " + json.ads }
    ]
  ]
  var text =
    "*Campaign #" +
    json.ads +
    "* - Channel / Group 📣\n\n*Title*: " +
    json.title +
    "\n*Description*: " +
    json.description +
    "\n\n*Channel*: *" +
    json.name +
    "\nURL*: *" +
    json.link +
    "\nStatus*: Disabled 🚫\n\n*Daily budget*: " +
    json.budget +
    " " +
    cur +
    "\n*CPC*: " +
    json.cpc +
    " " +
    cur +
    "\n*Clicks*: " +
    json.total +
    " total / " +
    json.clicks +
    " today"
  Api.editMessageText({
    message_id: request.message.message_id,
    text: text,
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: button
    }
  })
  var add = Bot.getProperty("all_in_ads", { list: {} })
  add.list[number_ads] = {
    ads: json.ads,
    name: json.name,
    link: json.link,
    title: json.title,
    description: json.description,
    cpc: json.cpc,
    budget: json.budget,
    clicks: json.clicks,
    total: json.total,
    status: "Disabled 🚫",
    owner: json.owner,
    promotion: json.promotion
  }
  Bot.setProperty("all_in_ads", add, "json")
  return
}
// view ads
if (same == "view") {
  var button = [
    [
      { text: "✏️ Edit", callback_data: "/edit view " + json.ads },
      { text: "✅ Enable", callback_data: "/Enabled view " + json.ads }
    ]
  ]
  var text =
    "*Campaign #" +
    json.ads +
    "* - Post views 📃\n\n*Channel*: *" +
    json.name +
    "\nURL*: *" +
    json.link +
    "\nStatus*: Disabled 🚫\n\n*Daily budget*: " +
    json.budget +
    " " +
    cur +
    "\n*CPC*: " +
    json.cpc +
    " " +
    cur +
    "\n*Clicks*: " +
    json.total +
    " total / " +
    json.clicks +
    " today"
  Api.editMessageText({
    message_id: request.message.message_id,
    text: text,
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: button
    }
  })
  var add = Bot.getProperty("all_in_ads", { list: {} })
  add.list[number_ads] = {
    ads: json.ads,
    name: json.name,
    link: json.link,
    title: json.title,
    description: json.description,
    cpc: json.cpc,
    budget: json.budget,
    clicks: json.clicks,
    total: json.total,
    status: "Disabled 🚫",
    owner: json.owner,
    promotion: json.promotion
  }
  Bot.setProperty("all_in_ads", add, "json")
  return
}

