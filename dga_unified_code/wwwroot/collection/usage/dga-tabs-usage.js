import { h } from "@stencil/core";
export class DgaTabsUsage {
    constructor() {
        this.activeTab = 'Home';
        this.handleTabClick = (tabName) => {
            console.log(`Tab clicked: ${tabName}`);
            this.activeTab = tabName;
            // Handle tab navigation logic here
        };
    }
    render() {
        return (h("div", { key: '628162f006451a52ead87155e0e579c922bfa2fc', style: { padding: '20px', fontFamily: 'Arial, sans-serif' } }, h("h1", { key: 'c4160d7395f6834c8e3ca13f515bdaf6bebbf6e1' }, "DGA Tabs Component Examples"), h("p", { key: 'e6c702d3a70acdd56d097d10db759d1ed5ef1771' }, "Comprehensive examples of the tabs component in various real-world scenarios."), h("section", { key: '9982b317c25d7853014d0f9a38a997b64b365256', style: { marginBottom: '40px' } }, h("h2", { key: '2fa869b24a1ba17f769fdd5cf117fe5b9b24790a' }, "1. Website Navigation Menu"), h("p", { key: '8dee5caa62943ed47c23846c0a057a333d903422' }, "Main navigation for a website with different sections"), h("dga-tabs", { key: 'b9c807a56e42bc5dad6625994f8e4db7038c4b6d', size: "md", orientation: "horizontal", flush: false, external: false, divider: true, tabsList: [
                {
                    label: 'Home',
                    onClick: () => this.handleTabClick('Home'),
                    tabIcon: "home-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Products',
                    onClick: () => this.handleTabClick('Products'),
                    tabIcon: "package-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Services',
                    onClick: () => this.handleTabClick('Services'),
                    tabIcon: "settings-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'About Us',
                    onClick: () => this.handleTabClick('About'),
                    tabIcon: "users-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Contact',
                    onClick: () => this.handleTabClick('Contact'),
                    tabIcon: "mail-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                }
            ] })), h("section", { key: '1c0fcfd010e2d6c09a26ba04d98b2a9e17b63202', style: { marginBottom: '40px' } }, h("h2", { key: '3cbceb9b2b4a513786fb26344f2870e37801eb4b' }, "2. Dashboard Analytics Tabs"), h("p", { key: 'fa72bcebffee6003a6b88f4c2e363cb1383006d7' }, "Analytics dashboard with different data views"), h("dga-tabs", { key: '2e13938fda8d670862da4d94ac02aee68564b00d', size: "lg", orientation: "horizontal", flush: false, external: false, divider: true, tabsList: [
                {
                    label: 'Overview',
                    onClick: () => this.handleTabClick('Overview'),
                    tabIcon: "chart-line-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Sales',
                    onClick: () => this.handleTabClick('Sales'),
                    tabIcon: "trending-up-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Users',
                    onClick: () => this.handleTabClick('Users'),
                    tabIcon: "user-group-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Reports',
                    onClick: () => this.handleTabClick('Reports'),
                    tabIcon: "file-chart-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                }
            ] })), h("section", { key: '15e7fae2d2ab9ce98258dd039262b5416e0499c7', style: { marginBottom: '40px' } }, h("h2", { key: 'f46eeea0bae9ea9d182bd433093e265330c15452' }, "3. Settings Panel (Vertical Layout)"), h("p", { key: 'ffa0d66be82a368697144873248f4a7badbbb5a0' }, "User settings panel with vertical tab navigation"), h("div", { key: '0a6ede54b3c9a90917dde34c8fc68d0757c22242', style: { display: 'flex', gap: '20px' } }, h("dga-tabs", { key: '98d09c82fabe0ded7b8e042fbbbf1e15dffad12f', size: "md", orientation: "vertical", flush: false, external: false, divider: true, tabsList: [
                {
                    label: 'Profile',
                    onClick: () => this.handleTabClick('Profile'),
                    tabIcon: "user-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Security',
                    onClick: () => this.handleTabClick('Security'),
                    tabIcon: "shield-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Notifications',
                    onClick: () => this.handleTabClick('Notifications'),
                    tabIcon: "bell-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Billing',
                    onClick: () => this.handleTabClick('Billing'),
                    tabIcon: "credit-card-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Privacy',
                    onClick: () => this.handleTabClick('Privacy'),
                    tabIcon: "lock-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                }
            ] }), h("div", { key: 'f3742f33f1441657b3b18a2097807405c8a5493d', style: { padding: '20px', border: '1px solid #ddd', borderRadius: '4px', flex: '1 ' } }, h("p", { key: '3b26c31dfcd52b23e1aa5561685d72bf2f9323bc' }, "Content area for the selected tab (", this.activeTab, ") would appear here.")))), h("section", { key: '53f6f46fb810e995eef343ccec4dc869981f9231', style: { marginBottom: '40px' } }, h("h2", { key: 'bb074893025517772ab85cbc0e5bb70b972975a2' }, "4. E-commerce Product Information"), h("p", { key: 'ba9b692cdc6d7668619de7236f5c2f6ddd816aad' }, "Product detail page with different information sections"), h("dga-tabs", { key: '004129438827e5c505da446be6bdf5fd988d7326', size: "md", orientation: "horizontal", flush: false, external: false, divider: true, tabsList: [
                {
                    label: 'Description',
                    onClick: () => this.handleTabClick('Description'),
                    tabIcon: "file-text-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Specifications',
                    onClick: () => this.handleTabClick('Specifications'),
                    tabIcon: "list-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Reviews',
                    onClick: () => this.handleTabClick('Reviews'),
                    tabIcon: "star-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Shipping',
                    onClick: () => this.handleTabClick('Shipping'),
                    tabIcon: "truck-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Returns',
                    onClick: () => this.handleTabClick('Returns'),
                    tabIcon: "refresh-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                }
            ] })), h("section", { key: 'cc063ad8511ed1ef5a02ba6ede1c3d621a2a712c', style: { marginBottom: '40px' } }, h("h2", { key: '5e2568f561960512d2bcf64337b2847926ab8727' }, "5. External Navigation Links"), h("p", { key: '9deaae4a8892956914be8e290430ba55d19ac589' }, "Tabs that navigate to external pages or different sections"), h("dga-tabs", { key: '0ddfa890bee50a49656c6346c283eb0c37743b6e', size: "md", orientation: "horizontal", flush: false, external: true, divider: true, tabsList: [
                {
                    label: 'Documentation',
                    link: '/docs',
                    tabIcon: "book-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'API Reference',
                    link: '/api',
                    tabIcon: "code-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Examples',
                    link: '/examples',
                    tabIcon: "folder-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'GitHub',
                    link: 'https://github.com',
                    tabIcon: "github-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                }
            ] })), h("section", { key: '60be9a863d19cfd89284d1b88aa18d912940189e', style: { marginBottom: '40px' } }, h("h2", { key: '04ce60a96f91325e987aa43a547009ca9d5976d3' }, "6. Many Tabs with Overflow Menu"), h("p", { key: '50784c1ae3da79b877cd73d8e388b50ec8a83cf5' }, "Example with more than 5 tabs to demonstrate overflow behavior"), h("dga-tabs", { key: 'cbd4efebc09b2c74d4cbf596800c968f31a3c0d2', size: "md", orientation: "horizontal", flush: false, external: false, divider: true, tabsList: [
                {
                    label: 'January',
                    onClick: () => this.handleTabClick('January'),
                    tabIcon: "calendar-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'February',
                    onClick: () => this.handleTabClick('February'),
                    tabIcon: "calendar-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'March',
                    onClick: () => this.handleTabClick('March'),
                    tabIcon: "calendar-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'April',
                    onClick: () => this.handleTabClick('April'),
                    tabIcon: "calendar-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'May',
                    onClick: () => this.handleTabClick('May'),
                    tabIcon: "calendar-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'June',
                    onClick: () => this.handleTabClick('June'),
                    tabIcon: "calendar-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'July',
                    onClick: () => this.handleTabClick('July'),
                    tabIcon: "calendar-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'August',
                    onClick: () => this.handleTabClick('August'),
                    tabIcon: "calendar-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                }
            ] })), h("section", { key: '794c54bb522c96f23921c3731cc93db2d474045d', style: { marginBottom: '40px' } }, h("h2", { key: 'a99948cef55db0dfb5f46a7a4d97afec06af99db' }, "7. Different Tab Sizes"), h("h3", { key: '20aac824cf65ca4e4b19037ece13de31c7c3daaa' }, "Small Size"), h("dga-tabs", { key: '510827b5d596606570c5ca630b3da4f89a0471b6', size: "sm", orientation: "horizontal", flush: false, external: false, divider: true, tabsList: [
                { label: 'Small', onClick: () => this.handleTabClick('Small') },
                { label: 'Compact', onClick: () => this.handleTabClick('Compact') },
                { label: 'Minimal', onClick: () => this.handleTabClick('Minimal') }
            ] }), h("h3", { key: '59cfc64c36f8a8c8156aa0188f47a63885fdf171' }, "Medium Size (Default)"), h("dga-tabs", { key: 'cbcb78d947e269c0dc6111061939e05c2b92a6dc', size: "md", orientation: "horizontal", flush: false, external: false, divider: true, tabsList: [
                { label: 'Medium', onClick: () => this.handleTabClick('Medium') },
                { label: 'Standard', onClick: () => this.handleTabClick('Standard') },
                { label: 'Default', onClick: () => this.handleTabClick('Default') }
            ] }), h("h3", { key: '5728ea50253d8ba3cc31ba08d2d0a15894a1975f' }, "Large Size"), h("dga-tabs", { key: '3a82fc26afdbd2adf8e63fae46b48b49380d6b84', size: "lg", orientation: "horizontal", flush: false, external: false, divider: true, tabsList: [
                { label: 'Large', onClick: () => this.handleTabClick('Large') },
                { label: 'Prominent', onClick: () => this.handleTabClick('Prominent') },
                { label: 'Bold', onClick: () => this.handleTabClick('Bold') }
            ] })), h("section", { key: '1ebc1cfb746dfccae309032388d5423b0a892f2d', style: { marginBottom: '40px' } }, h("h2", { key: 'e53c52c45042a4582c95ad0c9a55c90400840c26' }, "8. Flush Tabs (No Padding)"), h("p", { key: 'c9be58b1fd0bb28edfd220341b93fe813658a91f' }, "Tabs with flush styling for tight layouts"), h("dga-tabs", { key: 'dda04a8018d541f814a0b56b95148f41eb59398e', size: "md", orientation: "horizontal", flush: true, external: false, divider: false, tabsList: [
                {
                    label: 'Flush Tab 1',
                    onClick: () => this.handleTabClick('Flush1'),
                    tabIcon: "square-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Flush Tab 2',
                    onClick: () => this.handleTabClick('Flush2'),
                    tabIcon: "square-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Flush Tab 3',
                    onClick: () => this.handleTabClick('Flush3'),
                    tabIcon: "square-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                }
            ] })), h("section", { key: 'b0c702339806d59be62677a9f1701fe59f790502', style: { marginBottom: '40px' } }, h("h2", { key: '5912c3fa3aeac57944df635f5c071ec811262862' }, "9. Disabled Tabs"), h("p", { key: '0e544fcefeac8214d01fa51867fd3a9c2d15f6a0' }, "Tabs in disabled state for maintenance or restricted access"), h("dga-tabs", { key: '9bb79b46b61a447a01afbbcbe137ffa615c10cab', size: "md", orientation: "horizontal", flush: false, external: false, divider: true, disabled: true, tabsList: [
                {
                    label: 'Disabled Tab 1',
                    onClick: () => this.handleTabClick('Disabled1'),
                    tabIcon: "lock-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Disabled Tab 2',
                    onClick: () => this.handleTabClick('Disabled2'),
                    tabIcon: "lock-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Disabled Tab 3',
                    onClick: () => this.handleTabClick('Disabled3'),
                    tabIcon: "lock-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                }
            ] })), h("section", { key: '691698c5f4e78ab9326884079b683944a7f977b6', style: { marginBottom: '40px' } }, h("h2", { key: 'eab8ae721a6081a6c5b0e5c5c02f7f9f212cb1ec' }, "10. Mobile-Friendly Tabs"), h("p", { key: '0f2175a569d1fd1c2d0a6c278df61b8dc3642638' }, "Compact tabs suitable for mobile interfaces"), h("dga-tabs", { key: '4962b653c5f6e738849a1bc54684ade47ec40a41', size: "sm", orientation: "horizontal", flush: true, external: false, divider: false, tabsList: [
                {
                    label: 'Feed',
                    onClick: () => this.handleTabClick('Feed'),
                    tabIcon: "rss-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Messages',
                    onClick: () => this.handleTabClick('Messages'),
                    tabIcon: "message-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                },
                {
                    label: 'Profile',
                    onClick: () => this.handleTabClick('Profile'),
                    tabIcon: "user-01",
                    iconProps: { variant: "stroke", type: "sharp" }
                }
            ] }))));
    }
    static get is() { return "dga-tabs-usage"; }
    static get states() {
        return {
            "activeTab": {}
        };
    }
}
