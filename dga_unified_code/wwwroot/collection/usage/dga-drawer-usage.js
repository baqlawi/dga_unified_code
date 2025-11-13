import { h } from "@stencil/core";
// import { IRoute } from './dga-drawer';
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
export class DgaDrawerUsage {
    constructor() {
        this.variant = 'neutral';
        this.open = false;
    }
    render() {
        return (h("div", { key: '7833f5328c9d67f1fa9a19601c634715c1b07dc4' }, h("h1", { key: 'e4e2622b5d8910bd9ef42042690fcc8deca5c047' }, "Drawer Example"), h("div", { key: '1023f52df6b42ae8c544713ac0fb8c6bc45f0749', style: { padding: '0px', display: 'flex', gap: '20px' } }, h("div", { key: '8a34338fa2a189f934699cfd8f4c7718749e4e7b', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("div", { key: '9c8d4277039c7e03aec4b5d90f917851002eda91', style: { display: "flex", justifyContent: "center", width: "100vw" } }, h("button", { key: '282f2dc08f484c2ab949bad62ed36662d409d1e7', onClick: () => this.open = true }, "open"), h("button", { key: '186c62dda19e065654acc62834c0265ceac7342d', onClick: () => this.open = false }, "close")), h("dga-drawer", { key: '18fa17e8f09392d80600a22f602eb2fe8df0697b', routes: SidePanelRoutes, open: this.open, background: 'gray', headerLogo: "https://casamedia.com/wp-content/uploads/2023/04/adidas-1024x683.png", sx: {
                "& > .sidepanel": {
                    top: "112px",
                    backgroundColor: "red !important",
                }
            } })), h("div", { key: '7a0aa69fe61e96866e0d49d946d5e0ba98dfd5c4', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-drawer-usage"; }
    static get states() {
        return {
            "variant": {},
            "open": {}
        };
    }
}
