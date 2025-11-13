import { Fragment, h } from "@stencil/core";
// import { IRoute } from '../dga-drawer/dga-drawer';
const SidePanelRoutes = [
    {
        name: 'Link',
        path: '/',
        icon: {
            name: 'home-01',
            variant: 'stroke',
            size: 16,
        },
        disabled: false,
        children: [
            {
                name: 'Link',
                path: '1',
                // icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
                // badge: 39,
            },
            {
                name: 'Link',
                path: '2',
                // icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
                // badge: 21,
            },
            {
                name: 'Link',
                path: '3',
                // icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
                // badge: 2,
            },
            // {
            //   name: "Home 4",
            //   path: "4",
            //   icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
            //   badge: 20,
            // },
            // {
            //   name: "Home 5",
            //   path: "5",
            //   icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
            //   badge: 150,
            //   children: [
            //     {
            //       name: "Home 1",
            //       path: "1",
            //       icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
            //       badge: 39,
            //       level: 2,
            //     },
            //     {
            //       name: "Home 4",
            //       path: "4",
            //       icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
            //       badge: 20,
            //       level: 2,
            //     },
            //     {
            //       name: "Home 5",
            //       path: "5",
            //       icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
            //       badge: 150,
            //       level: 2,
            //     },
            //     {
            //       name: "Home 6",
            //       path: "6",
            //       icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
            //       badge: 200,
            //       level: 2,
            //     },
            //     {
            //       name: "Home 7",
            //       path: "7",
            //       icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
            //       badge: 24,
            //       level: 2,
            //     },
            //   ],
            // },
            // {
            //   name: "Home 6",
            //   path: "6",
            //   icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
            //   badge: 200,
            // },
            // {
            //   name: "Home 7",
            //   path: "7",
            //   icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
            //   badge: 24,
            // },
        ],
    },
    {
        name: 'Components',
        path: '/components',
        icon: {
            name: 'home-01',
            variant: 'stroke',
            size: 16,
        },
        disabled: false,
        children: [
            {
                name: 'Buttons',
                path: '/buttons',
                icon: {
                    name: 'home-01',
                    variant: 'stroke',
                    size: 16,
                },
                badge: 100,
            },
            {
                name: 'Badges',
                path: '/badges',
                icon: {
                    name: 'home-01',
                    variant: 'stroke',
                    size: 16,
                },
                badge: 100,
            },
            {
                name: 'Paths',
                path: '/Paths',
                children: [
                    {
                        name: 'Buttons',
                        path: '/buttons',
                        icon: {
                            name: 'home-01',
                            variant: 'stroke',
                            size: 16,
                        },
                        badge: 100,
                    },
                    {
                        name: 'Badges',
                        path: '/badges',
                        icon: {
                            name: 'home-01',
                            variant: 'stroke',
                            size: 16,
                        },
                        badge: 100,
                    },
                    {
                        name: 'Paths',
                        path: '/Paths',
                        icon: {
                            name: 'home-01',
                            variant: 'stroke',
                            size: 16,
                        },
                        badge: 100,
                    },
                ],
            },
            {
                name: 'Inputs',
                path: '/inputs',
                icon: {
                    name: 'home-01',
                    variant: 'stroke',
                    size: 16,
                },
                badge: 100,
            },
            {
                name: 'Accordions',
                path: '/accordions',
                icon: {
                    name: 'home-01',
                    variant: 'stroke',
                    size: 16,
                },
                badge: 100,
            },
            {
                name: 'Tabs',
                path: '/tabs',
                icon: {
                    name: 'home-01',
                    variant: 'stroke',
                    size: 16,
                },
                badge: 100,
            },
        ],
    },
    {
        name: 'Components 2',
        path: '/components',
        icon: {
            name: 'home-01',
            variant: 'stroke',
            size: 16,
        },
        disabled: false,
        children: [
            {
                name: 'Buttons',
                path: '/buttons',
                icon: {
                    name: 'home-01',
                    variant: 'stroke',
                    size: 16,
                },
                badge: 100,
            },
            {
                name: 'Badges',
                path: '/badges',
                icon: {
                    name: 'home-01',
                    variant: 'stroke',
                    size: 16,
                },
                badge: 100,
            },
            {
                name: 'Paths',
                path: '/Paths',
                children: [
                    {
                        name: 'Buttons',
                        path: '/buttons',
                        badge: 100,
                    },
                    {
                        name: 'Badges',
                        path: '/badges',
                        badge: 100,
                    },
                    {
                        name: 'Paths',
                        path: '/Paths',
                        badge: 100,
                    },
                ],
            },
            {
                name: 'Inputs',
                path: '/inputs',
                badge: 100,
            },
            {
                name: 'Accordions',
                path: '/accordions',
                badge: 100,
            },
            {
                name: 'Tabs',
                path: '/tabs',
                badge: 100,
            },
        ],
    },
];
export class DgaHeaderUsage {
    constructor() {
        this.activeLink = 'link-1';
        this.collapsed = false;
        this.open = false;
    }
    render() {
        return (h(Fragment, { key: 'bb44ae7dc9113261332f4e7c16fee4b6f3435c29' }, h("dga-second-nav-header", { key: 'dd8c1c228e945af1bb410cfcc51b3e8393237e95', hideDivider: true }, h("dga-second-nav-header-actions", { key: 'eab3cd29bc0b9bc7c01310c1ffd4d9c8d109c66e' }, h("dga-button-v2", { key: '4c3da5d7e62fb27663579d0105fd7b092a189f13', label: "Button", variant: "transparent", size: "sm", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'mic-01',
                type: 'rounded',
                variant: 'stroke',
                color: '#FFFFFF',
            } }), h("dga-button-v2", { key: '0afd4c17b4f0ecbd2861994397be4b43bcf2b4d1', label: "Button", variant: "transparent", size: "sm", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'zoom-in-area',
                type: 'rounded',
                variant: 'stroke',
                color: '#FFFFFF',
            } }), h("dga-button-v2", { key: 'de476dcd8866c106913d3d002c016e3736ef8304', label: "Button", variant: "transparent", size: "sm", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'zoom-out-area',
                type: 'rounded',
                variant: 'stroke',
                color: '#FFFFFF',
            } }), h("dga-button-v2", { key: 'df22254d1fbc563734b51fd0b6f4eabeedd4d650', label: "Button", variant: "transparent", size: "sm", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'view',
                type: 'rounded',
                variant: 'stroke',
                color: '#FFFFFF',
            } })), h("dga-second-nav-header-content", { key: '262515eca00c2623769218aa05d2bbbfec054752' }, h("dga-second-nav-header-item", { key: '861b0a6ec625057dd277079c9e0e13f08670eb04', label: "Cloudy" }, h("dga-icon", { key: 'ea14200e677da9da0c6416cb1331517c0f7c32ba', icon: "cloud", variant: "stroke", type: "rounded" })), h("dga-second-nav-header-item", { key: '0245c214b841a1283c79008f2bddafdbb25ec194', label: "21 Jan 2024" }, h("dga-icon", { key: '2c515b4f6e14dceead98d63bbc12b531e040f48b', icon: "calendar-04", variant: "stroke", type: "rounded" })))), h("dga-nav-header", { key: '62a6da7d79e2b026f65ea9a399c995ca3a0b000b', fullWidth: true, divider: true, sticky: true }, h("dga-nav-header-main", { key: 'e51815ec6b5380707f6d9fdf1ea5da3bac9d00a1', collapsed: this.collapsed, onToggleCollapsed: e => {
                this.collapsed = e.detail;
                console.log('collapsed', e.detail);
            } }, h("dga-button", { key: '8ea0acaa19fc5ad26c32d47b56755e8fab719a9f', iconOnly: true, leadIcon: true, leadIconType: this.collapsed ? 'cancel01' : 'menu01', leadIconProps: {
                name: this.collapsed ? 'menu01' : 'cancel01',
                size: 24,
                variant: 'stroke',
                type: 'rounded',
            }, variant: "transparent", onClick: () => (this.collapsed = !this.collapsed), class: "header-menu__btn", sx: {
                display: { xs: 'block', md: 'none' },
            } }), h("dga-nav-header-logos", { key: '5deb0b7f9be6d4c0aedab2d8fab5a5ba010b21dd', logoSrc: "https://dga-nds-fbhtx.ondigitalocean.app/mobile-logo.svg", govSrc: "https://dga-nds-fbhtx.ondigitalocean.app/mobile-logo.svg", logoLink: "#", govLink: "#" }), h("dga-nav-header-menu", { key: 'c4ebc61f2d2be4f054e1f792da8cc4d90353633a' }, h("dga-nav-header-link", { key: '583df0d814e77196228ad3c42f91b2dd3faaf6e7', label: "Item 1", icon: "arrow-down-01", active: this.activeLink === 'link-1', subMenuBackground: "white", onClick: () => {
                this.activeLink = 'link-1';
            } }, h("dga-nav-header-sub-menu", { key: 'ca57e3bf814c6a9b82bd5f5fa9332074fefec86a', "sub-menu-full-width": true, background: 'white' }, h("dga-nav-header-sub-menu-column", { key: 'a42ef49ea7e5b34397313decd541176115ac203c', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: '8ca375bcc0beb41511da73b638ee7dbe31ed7459', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: '9bf7f1ec461250eb3fbeb97e7de1bc4960c12eeb', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })), h("dga-nav-header-sub-menu-column", { key: 'bf8ee6233bcf4d97e460f0d56a384f9a3e51f1ba', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: 'c9de72bb4d4f43769add43cf68cdb1192b8c9289', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: '0ff87f9e0f4e8a0bfb49e50a52ef8bd8e9826e66', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })), h("dga-nav-header-sub-menu-column", { key: '2b14115626f9fa534cf782fe0eb6dd46be7f75ed', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: '3ace8fbd4b0ca767e5cf3a3e1c1a75f8aa50f791', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: 'afe63e0b47358ae21cc058de7030af357bd9cb13', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })), h("dga-nav-header-sub-menu-column", { key: '5c809d164f682ea9df2640f9a1c55b6b1888cbbd', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: '47e17efbf9f797dd5a2b824102ffc5d41f4e257a', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: 'a8faac3925ed9dc44c8e6f9f3d39dd2d5f76ab71', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })))), h("dga-nav-header-link", { key: 'a53d51cec547666873a9c6cf29a3b63973d73ad7', label: "Item  2", icon: "arrow-down-01", active: this.activeLink === 'link-2', subMenuBackground: "white", subMenuFullWidth: true, onClick: () => {
                this.activeLink = 'link-2';
            } }, h("dga-nav-header-sub-menu", { key: '2c6c05174dd32ebcb696bba44e3790890dad7911', "sub-menu-full-width": true, background: 'white' }, h("dga-nav-header-sub-menu-column", { key: 'ae92782cbced05b550040cb6c9b95c94534526d1', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: 'f162dfd01b0fc0399dd8c1a440271772e0e176a0', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: '38ec49c5401428f3c6ac674d8e7c89a008dcc383', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })), h("dga-nav-header-sub-menu-column", { key: 'c3358253f7256c8ce1b94a66288822afbdceed74', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: '62ee773c412c958c28cc7cac3aec606375969056', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: '08a2c0fafecddfcb26d09978d0059ccdda4d4000', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })))), h("dga-nav-header-link", { key: '0663798807d82a1b0aaa7b0cf9b8a7a78fe3122c', label: "Item  3", icon: "arrow-down-01", active: this.activeLink === 'link-3', subMenuBackground: "white", subMenuFullWidth: true, onClick: () => {
                this.activeLink = 'link-3';
            } }), h("dga-nav-header-link", { key: '8b8f0fdff53a0bdecc36640c3c5f944c3c8bac3e', label: "Item  4", icon: "arrow-down-01", active: this.activeLink === 'link-4', subMenuBackground: "white", subMenuFullWidth: true, onClick: () => {
                this.activeLink = 'link-4';
            } }, h("dga-nav-header-sub-menu", { key: 'c0a137fad21b70b0ea719f95e9d66c5ad60f7099', "sub-menu-full-width": true, background: 'white' }, h("dga-nav-header-sub-menu-column", { key: 'c647e025a5a9eb290cbb3d8387787e25ea06d924', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: '1e6188cd490f21f38e5a1b4fb97063dc866c5883', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: 'd5cca540ca223dcef77f497cc5283ef1a87af4df', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })), h("dga-nav-header-sub-menu-column", { key: 'd430bd61b5876b7aaa70c439283372096b0e5559', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: '934bd7004a8b099007bd16f1c0b8eeaa54ae54f7', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: 'a7f7a7bacbc27669f328b0f34b37973456a140e0', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })), h("dga-nav-header-sub-menu-column", { key: '380bb447c37c5b5d222610daa5c4506d11b994e9', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: 'faeb0838d5eb0eff012933ac49fffbbff1894b25', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: '4dbc3230cc8e777dfdff8b9cdf6d92d46e0724d5', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })), h("dga-nav-header-sub-menu-column", { key: 'cf807d6aad1d51623be1932318e28c113f118b82', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: 'bd75a38694171c662e1b4e244bf3c4af0daf19ef', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: '9adb51767d290a12652d7321a668cbe99e2aa003', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })), h("dga-nav-header-sub-menu-column", { key: '97bbc15e6fe341352e8a4eaca5bad9492807bc32', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: '7aad1a99431561d2ad853f3529adca9d7595504a', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: '996286f46df24089218ed82a57fc21c4da47e6b7', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })), h("dga-nav-header-sub-menu-column", { key: 'c52dd4ca49b7c6ad21f40f7b1d84b97c6f1b43c7', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: '491a811cc2e8d7f1cbb844d99064a7658b2fd36a', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: '111f47363b97eda9c298bcc6c1e700031ba9812f', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })))))), h("dga-nav-header-actions", { key: '071239c37d265ab41ff55ff0fb3cb4b0ef7e5970' }, h("dga-header-action-btn", { key: '714626f55b94b684bb0f5a854f4cdaedd823c42f', label: "Search", icon: "search-01", subMenuBackground: "white" }, h("dga-nav-header-sub-menu", { key: 'c59bd532400fb83a587a8ea46a71b1f062a03e81', "sub-menu-full-width": true, background: 'white' }, h("dga-flex", { key: '5757c0f8d8c1d3454c58a935dba781fe0a8c3667', spacing: 16 }, h("dga-search-box", { key: 'c855d4f7da420082104ab88d62c64d66091e1015', placeholder: "Search" }), h("dga-button", { key: 'e9f911294df49ff92ee0911c65a2aa6236078e6e', label: "Search" })))), h("dga-header-action-btn", { key: 'b8c72f9531c865591fe801b79ba54c7f17d68840', label: "\u0639\u0631\u0628\u064A", icon: "translation" }), h("dga-header-action-btn", { key: '3bed771a5a6b49e579bd643c75f080098469e105', label: "Login", icon: "user" })), h("dga-header-mobile-actions", { key: '7dc16b387d9def47c7123c31f41b973e66929e52' }, h("dga-header-menu", { key: '1820a4beac3d31531be3a2115f171e96301ae95d', actions: [
                {
                    label: 'Search',
                    icon: 'search-01',
                    onClick: () => {
                        console.log('clicked');
                    },
                },
                {
                    label: 'عربي',
                    icon: 'translation',
                    onClick: () => {
                        console.log('clicked');
                    },
                },
                {
                    label: 'Login',
                    icon: 'user',
                    onClick: () => {
                        console.log('clicked');
                    },
                }
            ] }))), h("dga-drawer", { key: 'fc501e0588f4c58de57d732b3a66eeda313ccee8', routes: SidePanelRoutes, open: this.collapsed, background: 'gray', headerLogo: "https://casamedia.com/wp-content/uploads/2023/04/adidas-1024x683.png", sx: {
                '& > .sidepanel': {
                    top: '112px',
                },
            } }), h("div", { key: 'c0efa3e37b20cbd871301633a0a3784956fee1fb' }, "Test")));
    }
    static get is() { return "dga-header-usage"; }
    static get states() {
        return {
            "activeLink": {},
            "collapsed": {},
            "open": {}
        };
    }
}
