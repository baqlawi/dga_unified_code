import { Fragment, h } from "@stencil/core";
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
export class DgaHeaderMenuItemUsage {
    constructor() {
        this.isMenuOpen = false;
        this.collapsed = false;
        // private buttonRef: HTMLElement | null = null;
        this.anchorEl = null;
        // private buttonRef: HTMLElement | null = null; // Reference to the button
        this.toggleMenu = () => {
            this.isMenuOpen = !this.isMenuOpen;
        };
        this.closeMenu = () => {
            this.isMenuOpen = false;
        };
    }
    get open() {
        return Boolean(this.anchorEl);
    }
    handleClick(event) {
        this.anchorEl = event.currentTarget;
    }
    handleClose() {
        this.anchorEl = null;
    }
    render() {
        return (h(Fragment, { key: '663c1f433cd2ded7477a43aac7563a710a264e38' }, h("dga-header-vv2", { key: 'ae625fe9e84f67fff13a608317051077f89c31e6' }, h("dga-flex", { key: 'e622b3e3e303c6518791102899f3c7c660ace0f2', spacing: 16, direction: "row", align: "center", justify: "between" }, h("dga-button", { key: '67878b63558c77e2d51141f2296851d99dc1b45f', iconOnly: true, leadIcon: true, leadIconType: this.collapsed ? 'cancel01' : 'menu01', leadIconProps: {
                name: this.collapsed ? 'menu01' : 'cancel01',
                size: 24,
                variant: 'stroke',
                type: 'rounded',
            }, variant: "transparent", onClick: () => (this.collapsed = !this.collapsed), class: "header-menu__btn", sx: {
                display: { xs: 'block', md: 'none' },
            } }), h("dga-logo-placeholder", { key: 'e75a25cac5cb2ef84380c3234d7947b93c5fa5cd', size: "md" }), h("dga-flex", { key: 'f65528c83cd42e89a240bcfeeec64df1e183acc5', direction: "row", align: "center", justify: "start", sx: {
                display: { xs: 'none', md: 'block' },
            } }, h("dga-header-menu-item", { key: '391c8645a305412ac95e75ab091ef4b8df3e468a', label: "Home" }), h("dga-header-menu-item", { key: 'b4311bd384ae72243fdda66b42e2f7f2e0884e1c', label: "About" }), h("dga-header-menu-item", { key: '35c04c6643d8bb9807deeed98fedfdac4ee4bd3e', label: "Contact", active: true }, h("dga-header-sub-menu", { key: 'eb10f1b70669005793d66a1751dd7f36d911efb7', subMenuFullWidth: true }, h("dga-header-sub-menu-column", { key: '0590fd7330dff2988c25f14ec7d5f84a5d00fef3', label: "Column Label" }, h("dga-header-sub-menu-item", { key: 'f22613029e90945a5f0cd82c84b4237e567b8284', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, h("dga-tag", { key: 'edcb905f44ca827c6b26059d22cb25cf24fa9182', label: "Tag", color: "blue", slot: "tag", rounded: true })), h("dga-header-sub-menu-item", { key: '91be26c0d50cba2d9fc4e997b48cc6e5314e545c', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, h("dga-tag", { key: '586d9cf0092bc1f16065dc21df64ba6cc3f83a8d', label: "Tag", color: "blue", slot: "tag", rounded: true })), h("dga-header-sub-menu-item", { key: 'cc61455ce7d17e79747bf940ff34030045f9812b', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, h("dga-tag", { key: 'ddbfa5587f83ddc5bca99273db9d889be33ed0d5', label: "Tag", color: "blue", slot: "tag", rounded: true }))), h("dga-header-sub-menu-column", { key: '02b2ef0c7f10b2915a63b2c84bcc593e66c4de52', label: "Column Label" }, h("dga-header-sub-menu-item", { key: '549290cd1997fb3f3c16e15f572166a6f12f819e', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, h("dga-tag", { key: '93b36ca489a7c7fc8b53b86ee4df3783eac69a45', label: "Tag", color: "blue", slot: "tag", rounded: true })), h("dga-header-sub-menu-item", { key: 'f95d54f2fbd3594970d666ed8347bc1192b0fb28', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, h("dga-tag", { key: 'fd892cd012e40c9d2d6739e53ba416356c7ab53a', label: "Tag", color: "blue", slot: "tag", rounded: true })), h("dga-header-sub-menu-item", { key: '7bfd98202479a64ee224a78d7631e5cd67e1e8b3', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, h("dga-tag", { key: 'b7360c051af7cfa7cd57fb03fa5ebfcccee754d0', label: "Tag", color: "blue", slot: "tag", rounded: true }))), h("dga-header-sub-menu-column", { key: 'd98ceee8b341e13fed7061dd0940245d5321f941', label: "Column Label" }, h("dga-header-sub-menu-item", { key: 'd0670b7dd3133d9be5c8444da0654e750a870e39', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, h("dga-tag", { key: '7b640c4c0739a61de73c719a204d92385619cc28', label: "Tag", color: "blue", slot: "tag", rounded: true })), h("dga-header-sub-menu-item", { key: '2bc1617ba077a4f0199ad24e7f3a7b71d00b0b35', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, h("dga-tag", { key: 'b859332d1cbbaf783b4c3616aeddd42a1787c0f9', label: "Tag", color: "blue", slot: "tag", rounded: true })), h("dga-header-sub-menu-item", { key: 'eaeedaef0f054de1ef2df69a33d5454a9d917d82', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, h("dga-tag", { key: 'bb6ee270f929ea4118ce1bc60a7e47e138d7b999', label: "Tag", color: "blue", slot: "tag", rounded: true }))), h("dga-header-sub-menu-column", { key: '4991722f12ce9debcdf36df48874f24301a87b54', label: "Column Label" }, h("dga-header-sub-menu-item", { key: '4a7fb207536d1b77520f2da18d5dd17df015b624', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, h("dga-tag", { key: '6a126599a2da44984842d43bce4516c10bb6a5c5', label: "Tag", color: "blue", slot: "tag", rounded: true })), h("dga-header-sub-menu-item", { key: 'f55983098537dd647c2dccad94bb7b730b701054', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, h("dga-tag", { key: 'b5f56b908f064f715136d90bb4d2040920ca0772', label: "Tag", color: "blue", slot: "tag", rounded: true })), h("dga-header-sub-menu-item", { key: '9f7ee134f399deeb082bf94d0397b3c1f4aedf87', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, h("dga-tag", { key: '407b552e72b29b6463ea5259aa84e173330280ba', label: "Tag", color: "blue", slot: "tag", rounded: true }))), h("dga-header-sub-menu-column", { key: 'c143d5d38e5b30c984be64bd01ef2386d82ae7b5', label: "Column Label" }, h("dga-header-sub-menu-item", { key: 'f0b7474d2f2d47f37e9ec852624c291cb2c369a6', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, h("dga-tag", { key: '27bfc0ead3624a3d098c05159c0ca6ad5f7caade', label: "Tag", color: "blue", slot: "tag", rounded: true })), h("dga-header-sub-menu-item", { key: 'c4c9addffd24e12b2449ce787da7d71357c1a6d0', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, h("dga-tag", { key: '70b3731f19cbd07f8a81d200c7d4f855d125f940', label: "Tag", color: "blue", slot: "tag", rounded: true })), h("dga-header-sub-menu-item", { key: '643f87294fccfbfa27fa591ec42731cfa0349bd8', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, h("dga-tag", { key: '3eb486a9ec25ba58032bbe8761160393ff39c7b1', label: "Tag", color: "blue", slot: "tag", rounded: true }))))))), h("dga-flex", { key: '02454235c0109809718145e8ae6910a73e1754ba', direction: "row", align: "center", justify: "end" }, h("dga-header-action", { key: 'f32e62b2620d9871e8c0300e66a45ec49903d3eb', label: "Action", icon: "login-square-01" }), h("dga-header-action", { key: 'd35f322c6836902ff84b8bc551da16735424b0b6', icon: "login-square-01", iconPosition: "top" }, h("dga-header-sub-menu", { key: '37eb7004404b01cfb3f6c03d17a98e832e36124f', subMenuFullWidth: true }, h("dga-search-box", { key: '7530c227683b355e07a21deb6019c6c978da28f5' }))), h("dga-action-menu", { key: '993892d191423ba0fb61cf27024f70527e0f3f5c', open: this.isMenuOpen, onClose: () => (this.isMenuOpen = false), placement: 'bottom-end' }, h("dga-button-v2", { key: '44eafc3370862cf1217a2020d2bda2231796fc2d', slot: "trigger", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'more-horizontal-circle-01',
                size: 24,
                variant: 'solid',
                type: 'rounded',
            }, variant: "transparent", onClick: () => (this.isMenuOpen = true), class: "header-menu__btn" }), h("dga-menu-list", { key: '2b7f705647f8acc477f79ec8d84cceb5f2da299e' }, h("dga-menu-item", { key: '5fefb270b91c27a8e65d257eae0791afec2b3608', label: "Item Label" }), h("dga-menu-item", { key: 'f5d406d18a7b4a98afc390f0efc8f4a7bbf0ac57', label: "Item Label" }), h("dga-menu-item", { key: 'dc30bfc2904c460bff301618ded547cc8464b2ca', label: "Item Label" }))))), h("dga-drawer", { key: 'd067c611793bb06fa13d1da08a57389233f314ae', routes: SidePanelRoutes, open: this.collapsed, background: 'gray', headerLogo: "https://casamedia.com/wp-content/uploads/2023/04/adidas-1024x683.png", sx: {
                '& > .sidepanel': {
                    top: '72px',
                },
            }, overlay: true }, "efddsfdsfsdfdsfdsf dfdsfdsfdsfdsfdsfdf", h("a", { key: '10f9861a6b70459f3b763048a44ecc8aa9c5628e' }, "fdgdfgfdg"), h("div", { key: '4704f12cc7e8a140df2e4c1225336327b51e52cf' }, "gfdgfdgfd")), h("dga-logo-placeholder", { key: '387bd7bda29efecfd1f954de2b01fc3ebedfd81f', text: "Platform Logo", size: "md" }), h("dga-logo-placeholder", { key: '3f2ea570a13917350b5c09cd6ef92d6c727387de', text: "Platform Logo", size: "sm" }), h("dga-action-menu", { key: 'c855d109b6e5b771ea6f48f0349701eb4d5d450a', open: this.isMenuOpen, onClose: () => (this.isMenuOpen = false), placement: 'bottom-end' }, h("dga-button-v2", { key: '2e123aaa94ef6f44ddf5eae1a166d9bde8dd3ef5', slot: "trigger", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'more-horizontal-circle-01',
                size: 24,
                variant: 'solid',
                type: 'rounded',
            }, variant: "transparent", onClick: () => (this.isMenuOpen = true), class: "header-menu__btn" }), h("dga-menu-list", { key: '1adf8b72000c72251eca60dcf647097fb426538e' }, h("dga-menu-item", { key: 'b8b9e81b06c6ddcb7725b19d7885af629ccf1f3d', label: "Item Label" }), h("dga-menu-item", { key: '117bc1564e60da286b77943d7772630f984c0f7a', label: "Item Label" }), h("dga-menu-item", { key: 'e17bf9524f6405dc018e44acf5004f29793d64be', label: "Item Label" })))));
    }
    static get is() { return "dga-header-menu-item-usage"; }
    static get states() {
        return {
            "isMenuOpen": {},
            "collapsed": {},
            "anchorEl": {}
        };
    }
}
