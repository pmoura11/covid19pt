/*  ############ MENU CONFIGURATION ###############################################################################
	Version 1.0
	Allow to load single nav-item or nav-items with submenus.
	Allow 3 different types of content: Links, Separators and Dashboards (iframe loaded)
		[Link]: link to other template 
		Fill url and leave dashboard empty "dashboard":{}
		
		[Separator]: just separator between nav-items
		Leave url empty "url":"" and leave dashboard empty "dashboard":{}
		
		[Dashboard]: leave url empty and fill dashboard object.
	
	CONFIGURATION OPTIONS:
	param			type					description
	---------------------------------------------------------------------------------------------------------------
	menu			String					name of menu.			
	rol				String					Rol of the user that load the menu
	home			Boolean					show or hide first nav-item (home, linked to index).
	noSession		String					template to go when there´s no session or expires.
	navigation		Array of Objects		The menu navigation items.
	
	--- ITEMs -----------------------------------------------------------------------------------------------------
	
	title			Object					nav-item title in english, spanish, ...loaded with <html lang="en" >
	icon			String					icon of the nav-item using icon fonts available flaticon- , fa- ,la-
	url				String					url of nav-item (http or https)
	submenu			Array of Objects		Array of nav-submen-items 
	dashboard		Object					Object with dashboard data configuration
	
	--- ITEMs > Dashboard -----------------------------------------------------------------------------------------
	
	src				String					url of Dashboard (http or https)
	title			String					Title of Dashboard	
	background		String					background Color (hex, rgb, rgba, hsl) (#FFF e.j.)
	height			String					Height of the iframe that contains the dashboard (850px e.j.)
	mode			String (op)				["INSERT","APPEND","AFTER"] defautl INSERT, not operative in V.1.0
	
*/

// MENU JSON
var menuJson = {
  menu: "OnesaitPlatform",
  rol: "ROLE_DEVELOPER",
  home: false,
  noSession: "login.html",
  navigation: [{
      title: {
        EN: "Global KPIs",
        PT: "Indicadores Gerais",
        ES: "Datos Generales",
      },
      icon: "fa fa-tachometer-alt",
      url: "",
      submenu: [],
      dashboard: {
        src: "https://lab.onesaitplatform.com/controlpanel/dashboards/view/09ad3288-cbfc-4160-87b6-5111c2118450",
        title: "COVID-19 PORTUGAL",
        background: "",
        height: "690px",
        mode: "INSERT",
      },
    },
    {
      title: {
        EN: "Data by Region",
        PT: "Dados por ARS",
        ES: "Datos por Region",
      },
      icon: "fa fa-map",
      url: "",
      submenu: [],
      dashboard: {
        src: "https://lab.onesaitplatform.com/controlpanel/dashboards/view/23c3d79f-b883-44ed-af78-50d110ae929c",
        title: "Dados por Administração Regional de Saúde",
        background: "",
        height: "690px",
        mode: "INSERT",
      },
    },
    {
      title: {
        EN: "Data by County",
        PT: "Dados por Concelho",
        ES: "Datos por Município",
      },
      icon: "fa fa-map-marker-alt",
      url: "",
      submenu: [],
      dashboard: {
        src: "https://lab.onesaitplatform.com/controlpanel/dashboards/view/58816d52-0b55-4144-a60f-e16372dccaba",
        title: "Dados por Concelho",
        background: "",
        height: "690px",
        mode: "INSERT",
      },
    },
    {
      title: {
        EN: "Data by Age/sex",
        PT: "Dados por Idade/sexo",
        ES: "Datos por Idad/Sexo",
      },
      icon: "fa fa-venus-mars",
      url: "",
      submenu: [],
      dashboard: {
        src: "https://lab.onesaitplatform.com/controlpanel/dashboards/view/ff688967-4c00-4e1f-8c99-f1dd108bcbc0",
        title: "Dados por Idade e Sexo",
        background: "",
        height: "690px",
        mode: "INSERT",
      },
    },
    {
      title: {
        EN: "Data Analytics",
        PT: "Análise de Dados",
        ES: "Análisis de Datos",
      },
      icon: "fa fa-chart-line",
      url: "",
      submenu: [{
          title: {
            EN: "Infected",
            PT: "Infetados 100K/Habit",
            ES: "Infectados 100K/Habit"
          },
          icon: "fa fa-user-plus",
          url: "",
          dashboard: {
            src: "https://lab.onesaitplatform.com/controlpanel/dashboards/view/8363269b-d093-4340-a58c-d49e91327ca3",
            title: "Análise de Dados (Infetados por 100.000 Habitantes)",
            background: "",
            height: "690px",
            mode: "INSERT",
          },
        },
        {
          title: {
            EN: "Deads",
            PT: "Óbitos 100K/Habit",
            ES: "Muertes 100K/Habit"
          },
          icon: "fa fa-church",
          url: "",
          dashboard: {
            src: "https://lab.onesaitplatform.com/controlpanel/dashboards/view/5de7be0b-f88a-4631-8569-459bf18b345b",
            title: "Análise de Dados (Óbitos por 100.000 Habitantes)",
            background: "",
            height: "690px",
            mode: "INSERT",
          },
        },
      ],
    },
    {
      title: {
        EN: "",
        PT: "",
        ES: ""
      },
      icon: "",
      url: "",
      submenu: [],
      dashboard: {},
    },
    {
      title: {
        EN: "Other Info",
        PT: "Outras informações",
        ES: "Otras Informaciones",
      },
      icon: "fa fa-info-circle",
      url: "",
      submenu: [],
      dashboard: {
        src: "https://lab.onesaitplatform.com/controlpanel/dashboards/view/d733c4d2-6856-47e6-9ebb-6f02e91beae9",
        title: "Outras Informações",
        background: "",
        height: "690px",
        mode: "INSERT",
      },
    },
  ],
};

/*  ############ END MENU CONFIGURATION ############################################################################ */

/*  ############ PAGE CONFIGURATION ###############################################################################
	Version 1.0
	Allow to configure the main App text and the elements of the template.
	You can configure the App (main), Header (top bar elements), content (first data to load like first dashboard, ...)
	and Footer element and link.
	
	CONFIGURATION OPTIONS:
	param					type					description
	-----------------------------------------------------------------------------------------------------------------
	title					String					title of template <title>
	description				String					Description of page, (meta)
	access					Object					Access, Paths and entry mode for App.
	
	--- Access: -----------------------------------------------------------------------------------------------------
	
	urlBasePath				String					Path base to templates.
	imgBasePath				String					Path to images.
	entry					String					["PRIVATE","PUBLIC"] access mode free or with login.
	urlBase					String					Console base path
	urlApi					String					Console API base path
	
	app						Object					App elements
	
	--- App: --------------------------------------------------------------------------------------------------------
	
	appLogo					String					img path string of logo image.
	appLogoCss				string					css for fixing custom logo.
	appLogoBackground		String					color for background applied to logo container .m-brand__logo
	appHome					String					text of App title or Home show it in header.
	appLoading				Boolean					*
	appFooter,				Boolean					show footer section or not.
	appStickymenu			Boolean					show sticky right menu or not.
	appWelcome				Boolean					show toastr notification with welcome or not.
	
	login					Object					Login elements
	
	--- Login: --------------------------------------------------------------------------------------------------------
	
	loginLogo				String (url)			image for login template
	loginLogoStyle			String (css)			css for adjust imagen logo if defined
	loginBackground			String (css)			css for background of login
	loginDescription		String (text)			a description showed in login template 
	signInTitle				String (text)			title for sign in form
	signUp					Boolean 				show or not singUP toggle and form
	forgotPassword			Boolean					show or not forgot password toogle and form
	rememberMe				Boolean					show or not remember me chekbox.
	termsAndConditions		Boolean					show or not the terms and condition chekbox.
	agreeInfoMsg			String (url)			text for the agree condition and terms
	privacyLink				String (url)			url for privacy template or file 
	conditionsLink			String (url)			url for conditions template or file
	
	
	header					Object					Header (top bar) elements and toolbars.
	
	--- Header: --------------------------------------------------------------------------------------------------------
	
	headerDashboads			Boolean					show header dashboard menu or not
	headerReports			Boolean					show header Report menu or not
	headerSearch			Boolean					show header Search input or not
	headerNotifications		Boolean					show header Notifications menu or not
	headerQuickactions		Boolean					show header Quick Actions menu or not
	headerUser				Boolean					show header User menu or not
	headerSidebarToggle		Boolean					show header Sidebar menu or not
	

	user					Object					user header elements
	
	--- user: --------------------------------------------------------------------------------------------------------
	
	showAvatar 				Boolean					show avatar and email of user or not.
	avatar					String					image of user avatar if defined
	profile 				Object link				user Profile link
	support  				Object link				user support link
	activity				Object link				user activity link
	messages				Object link				user activity link
	faq						Object link				user faq link
	support					Object link				user support link
	logout 					Object link				user Logout  link function to logout.	
	
		
	content					Object					Content elements and data to initially Load
	
	--- Content: --------------------------------------------------------------------------------------------------------
	
	contentHead				Boolean					Show content head in card
	contentTitle			String					title of card in content
	contentTools			Boolean					show card tools (collapse and fullscreen)
	contentPadding			String					modifies if defined, the padding of the content zone
	contentDashboard		Object Dashboard		contains the first dashboard to load initially on the page
	
	--- Content > contentDashboard: -------------------------------------------------------------------------------------
	
		enabled				Boolean					Enable the loading of this dashboard or not.
		dashboardName		String					Dashboard title
		changeTitle			Boolean					change or not the dashboard title in the card title content
		notification		Boolean					show notification toastr when dashboard is loading or not 
		src					String					url (http, https) of the dashboar to load.
		background			String					if provided (#FFF), the background of the iframe that loads de dashboard
		height				String					if provided (800px), the height of iframe that load the dashboard
		mode				String					["INSERT","APPEND","AFTER"] mode of loading, INSERT 
				
	
	footer					Object					Footer element and footer links	
	
	--- Footer: --------------------------------------------------------------------------------------------------------
	
	footerCopyright			String					Footer left text
	footerLinks				Boolean					show the links of the right part of the footer or not
	footerLinkAbout			Object link				Footer right link About
	footerLinkPrivacy		Object link				Footer right link Privacy
	footerLinkTerms			Object link				Footer right link Terms and conditions
	footerLinkCompany		Object link				Footer right link Company
	footerLinkSupport		Object link				Footer right link Support
	
	--- Footer > Object link: ------------------------------------------------------------------------------------------
		
		link				String					url (http,https) of the footer link
		text				String					text for the footer Link
		visible				Boolean					show or not that link
	
	
	themes					Object					App themes and styling configuration and settings
	
	--- Themes: --------------------------------------------------------------------------------------------------------
	
	skin					String					skin for the App [skin-light, skin-dark] not enabled in V.1.0
	contentBackground		String					if defined, backgroundColor of the content zone.
	footerBackground		String (css)			color of the background for footer section.
	
	
	TO-DO: Version 1.1
	--------------------------------------------------------------------------------------------------------------------
	- ALLOW CONFIGURATION ON REALTIME BY SESSIONSTORAGE OBJECT CLONE 
		- form with x-editable and functions to update values in obj and store changes in session.
		
	- More Styling , themes, menu , footer, header...
	
	
*/

// FRONTEND MAIN CONFIGURATION
var mainJson = {
  title: "COVID-19 Portugal | Dashboard",
  description: "Dashboards sobre a evolução da pandemia COVID-19 em Portugal",
  currentSkin: "skin-light",
  access: {
    urlBasePath: "",
    imgBasePath: "assets/app/media/img/",
    entry: "PUBLIC",
    urlBase: "https://lab.onesaitplatform.com",
    urlApi: "https://lab.onesaitplatform.com/api-manager/server/api",
  },
  app: {
    appLogo: "assets/app/media/img/logos/COVID-19.png",
    appLogoCss: "width: auto; max-height: 50px;",
    appLogoBackground: "background-color: #ffffff",
    appHome: "COVID-19 Portugal | Dashboard",
    appLoading: "",
    appFooter: true,
    appStickymenu: false,
    appWelcome: false,
  },
  login: {
    loginLogo: "assets/app/media/img/logos/onesait-platform-logo.png",
    loginLogoStyle: "",
    loginBackground: "assets/app/media/img/bg/bg-3.jpg",
    loginDescription: "Wellcome to onesait Platform",
    signInTitle: "Please, sign in on onesait:",
    signInBtnColor: "",
    signUp: false,
    forgotPassword: false,
    rememberMe: false,
    termsAndConditions: true,
    agreeInfoMsg: "Please, check the agree Privacy and Terms to access",
    privacyLink: "",
    conditionsLink: "",
  },
  user: {
    showAvatar: true,
    avatar: "assets/app/media/img/users/userAvatar.jpg",
    profile: {
      link: "profile.html",
      text: "ROL",
      visible: false
    },
    support: {
      link: "support.html",
      text: "Support",
      visible: false
    },
    activity: {
      link: "activity.html",
      text: "Activity",
      visible: false
    },
    messages: {
      link: "messages.html",
      text: "Messages",
      visible: false
    },
    faq: {
      link: "faq.html",
      text: "FAQ",
      visible: false
    },
    logout: {
      link: "login.html",
      text: "Exit",
      visible: true
    },
  },
  header: {
    headerDashboads: false,
    headerReports: false,
    headerSearch: false,
    headerNotifications: false,
    headerQuickactions: false,
    headerUser: false,
    headerSidebarToggle: false,
    headerSessionConfiguration: false,
  },
  content: {
    contentHead: true,
    contentTools: false,
    contentTitle: "onesait Platform Community Dashboard",
    contentHeadCss: "",
    contentTitleCss: "",
    contentDashboard: {
      enabled: true,
      dashboardName: "COVID-19 PORTUGAL",
      changeTitle: false,
      notification: false,
      src: "https://lab.onesaitplatform.com/controlpanel/dashboards/view/09ad3288-cbfc-4160-87b6-5111c2118450",
      background: "#FFFFFF",
      height: "690px",
      mode: "INSERT",
    },
  },
  footer: {
    footerCopyright: "2020 &copy; COVID-19 Portugal Dashboards powered by Onesait Platform",
    footerLinks: true,
    footerLinkAbout: {
      link: "https://www.onesaitplatformrevolution.com/",
      text: "About",
      visible: false,
    },
    footerLinkPrivacy: {
      link: "privacy.html",
      text: "Privacy",
      visible: false,
    },
    footerLinkTerms: {
      link: "terms.html",
      text: "Terms",
      visible: false
    },
    footerLinkCompany: {
      link: "https://www.minsait.com/es",
      text: "Minsait",
      visible: false,
    },
    footerLinkSupport: {
      link: "support.html",
      text: "onesait Support Center",
      visible: false,
    },
  },
  themes: {
    availableSkin: ["skin-light", "skin-dark"],
    changeSkin: "skin-light",
    contentBackground: "ghostwhite",
    contentPadding: "0px 0px",
    menu: "",
    footerBackground: "#0f242c",
  },
};