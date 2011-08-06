bookerfox.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ bookerfox.showFirefoxContextMenu(e); }, false);
  document.getElementById("bookerfox-toolbar").insertItem("tbPartial")
  document.getElementById("bookerfox-toolbar").insertItem("tbOrder")
  document.getElementById("bookerfox-toolbar").insertItem("tbTracking")
  document.getElementById("bookerfox-toolbar").insertItem("tbListings")
  document.getElementById("bookerfox-toolbar").insertItem("tbLogins")
};

bookerfox.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-bookerfox").hidden = gContextMenu.onImage;
};

window.addEventListener("load", bookerfox.onFirefoxLoad, false);


bookerfox.Calculate = function(d) {
  var BookPrice = document.getElementById('BookPrice');
  var p = parseFloat(BookPrice.value);
  var r = Math.round(p*d)/100;
  BookPrice.value = r;
};



bookerfox.OrderLookup = function(mpid) {
  OrderNum = document.getElementById('OrderID');
  var prefix = new String();
  var suffix = new String();

  switch(mpid) {

  case "AMZUS":
  prefix = "https://sellercentral.amazon.com/gp/orders-v2/details?ie=UTF8&orderID=";
  break;

  case "AMZUK":
  prefix = "https://sellercentral.amazon.co.uk/gp/orders-v2/details?ie=UTF8&orderID=";
  break;

  case "AMZCA":
  prefix = "https://sellercentral.amazon.ca/gp/orders-v2/details?ie=UTF8&orderID=";
  break;

  case "AMZDE":
  prefix = "https://sellercentral.amazon.de/gp/orders-v2/details?ie=UTF8&orderID=";
  break;

  case "AMZFR":
  prefix = "https://sellercentral.amazon.fr/gp/orders-v2/details?ie=UTF8&orderID=";
  break;

  case "AMZJP":
  prefix = "https://sellercentral.amazon.co.jp/gp/orders-v2/details?ie=UTF8&orderID=";
  break;

  case "ABE":
  prefix = "https://www.abebooks.com/servlet/OrderList?abepoid=";
  break;

  case "ALI":
  prefix = "http://sellers.alibris.com/ops/ordersearch.cfm?searchval=";
  suffix = "-1";
  break;

  case "A1B":
  prefix = "https://www.a1books.com/mkt/invdetail.do?invId=";
  break;

  case "BAN":
  prefix = "https://secure.barnesandnoble.com/sellers/ordermgmt/view.asp?orderfilter=searchorderid&orderfiltervalue=";
  suffix = "&stage_ordviewall_searchType||viewsearchorders.x=42&stage_ordviewall_searchType||viewsearchorders.y=5&statusfilter=all&orddatechoice=for&daterange=120";
  break;

  case "BIB":
  prefix = "https://www.biblio.com/booksellers/vieworders.php?order_id=";
  break;

  case "BUY":
  prefix = "https://sellertools.marketplace.buy.com/OrderE.aspx?o=";
  break;

  case "VAL":
  prefix = "";
  break;

  case "ECA":
  prefix = "";
  break;

  case "TBX":
  prefix = "";
  break;

  case "HAF":
  prefix = "https://account.half.ebay.com/ws/eBayISAPI.dll?MfcISAPICommand=MyAccountSaleSummary&searchkey=1&search=";
  break;

  case "EBA": //eBay orders by username
  prefix = "http://k2b-bulk.ebay.com/ws/eBayISAPI.dll?MyEbaySellingSoldListings&searchparam=4&Search=Search&searchvalue=";
  break;
  
  case "EBA-ON": //eBay orders by order number
  prefix = "http://k2b-bulk.ebay.com/ws/eBayISAPI.dll?MyEbaySellingSoldListings&searchparam=12&Search=Search&searchvalue=";
  break;
  
  case "EBA-EM": //eBay orders by email address
  prefix = "http://k2b-bulk.ebay.com/ws/eBayISAPI.dll?MyEbaySellingSoldListings&searchparam=3&Search=Search&searchvalue=";
  break;

  default:
  prefix = "http://www.google.com";
  };


gBrowser.selectedTab = gBrowser.addTab(prefix + OrderNum.value + suffix);

};



bookerfox.GotoLink = function(mphome) {
  var url = new String();


  switch(mphome) {

  case "AMZUS":
  url = "http://www.amazon.com/gp/seller-account/management/your-account.html/";
  break;

  case "AMZUK":
  url = "http://www.amazon.co.uk/gp/seller-account/management/your-account.html";
  break;

  case "AMZCA":
  url = "https://sellercentral.amazon.ca/gp/homepage.html";
  break;

  case "AMZDE":
  url = "http://www.amazon.de/gp/seller-account/management/your-account.html";
  break;

  case "AMZFR":
  url = "http://www.amazon.fr/gp/seller-account/management/your-account.html";
  break;

  case "AMZJP":
  url = "https://sellercentral.amazon.co.jp/gp/homepage.html";
  break;

  case "ABE":
  url = "https://www.abebooks.com/servlet/MembersMainMenu";
  break;

  case "ALI":
  url = "http://www.alibris.com/sellers";
  break;

  case "A1B":
  url = "https://www.a1books.com/mkt/?WVSESSION_ID=1535173166";
  break;

  case "BAN":
  url = "https://secure.barnesandnoble.com/sellers/sellprefs/view.asp?stage=slrmainsignin";
  break;

  case "BIB":
  url = "https://www.biblio.com/login.php";
  break;

  case "BUY":
  url = "https://sellertools.marketplace.buy.com/Login.aspx";
  break;

  case "VAL":
  url = "https://www.valorebooks.com/Seller.Overview.do";
  break;

  case "ECA":
  url = "http://www.ecampus.com/mp/";
  break;

  case "TBX":
  url = "https://www.textbookx.com/account/login.php";
  break;

  case "HAF":
  url = "https://account.half.ebay.com/ws/eBayISAPI.dll?MyAccountSummary&guest=1";
  break;

  case "EBA":
  url = "https://signin.ebay.com/ws/eBayISAPI.dll?SignIn";
  break;

  default:
  url = "http://www.google.com/";
  };

  gBrowser.selectedTab = gBrowser.addTab(url);

};



bookerfox.Track = function(PS) {
  TrackingNum = document.getElementById('TrackingNum');
  var tprefix = new String();
  var tsuffix = new String();
  
  switch(PS) {
  
  case "USPS":
  tprefix = "http://trkcnfrm1.smi.usps.com/PTSInternetWeb/InterLabelInquiry.do?strOrigTrackNum=";
  break;
  
  case "UPS":
  tprefix = "http://wwwapps.ups.com/WebTracking/processInputRequest?sort_by=status&tracknums_displayed=1&TypeOfInquiryNumber=T&loc=en_US&InquiryNumber1=";
  tsuffix = "&track.x=0&track.y=0";
  break;
  
//  case "UPS-MI":
//  tprefix = "";
//  tsuffix = "";
//  break;

  case "FEDEX":
  tprefix = "http://www.fedex.com/Tracking?ascend_header=1&clienttype=do tcom&cntry_code=us&language=english&tracknumbers=";
  break;
  
  default:
  tprefix = "http://www.google.com/";
  };
  
  gBrowser.selectedTab = gBrowser.addTab(tprefix + TrackingNum.value);
  
};

bookerfox.LookupListing = function(mkt) {
  ListingID = document.getElementById('ListingID');
  var llprefix = new String();
  
  switch(mkt) {
  
  case "ABE":
  llprefix = "http://www.abebooks.com/servlet/BookDetailsPL?bi=";
  break;
  
  case "ALI":
  llprefix = "http://www.alibris.com/booksearch.detail?invid=";
  break;
  
  case "EBA":
  llprefix = "http://cgi.ebay.com/ws/eBayISAPI.dll?ViewItem&item=";
  break;
  
  default:
  tprefix = "http://www.google.com/";
  };
  
  gBrowser.selectedTab = gBrowser.addTab(llprefix + ListingID.value);
  
};