// import { Component, h } from '@stencil/core';
// @Component({
//   tag: 'dga-grid-usage',
//   styleUrl: 'dga-grid-usage.scss',
// })
// export class DgaGridUsage {
//   render() {
//     return (
//       <div class="filteration-usage" style={{
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '20px',
//       }}>
//         <h2>Filteration Component Examples</h2>
//         {/* <!-- Basic Grid Layout Example --> */}
//         <dga-grid-container spacing={2}>
//           <dga-grid-item xs={12} sm={6} md={4}>
//             <div class="demo-content">Item 1</div>
//           </dga-grid-item>
//           <dga-grid-item xs={12} sm={6} md={4}>
//             <div class="demo-content">Item 2</div>
//           </dga-grid-item>
//           <dga-grid-item xs={12} sm={6} md={4}>
//             <div class="demo-content">Item 3</div>
//           </dga-grid-item>
//         </dga-grid-container>
//         {/* <!-- Responsive Grid with Different Column Widths --> */}
//         <dga-grid-container spacing={3}>
//           <dga-grid-item xs={12} sm={6} md={4} lg={3}>
//             <div class="demo-content">Full width on mobile, half width on tablet, 1/3 on laptop, 1/4 on desktop</div>
//           </dga-grid-item>
//           <dga-grid-item xs={12} sm={6} md={4} lg={3}>
//             <div class="demo-content">Responsive Item 2</div>
//           </dga-grid-item>
//           <dga-grid-item xs={12} sm={6} md={4} lg={3}>
//             <div class="demo-content">Responsive Item 3</div>
//           </dga-grid-item>
//           <dga-grid-item xs={12} sm={6} md={12} lg={3}>
//             <div class="demo-content">Responsive Item 4</div>
//           </dga-grid-item>
//         </dga-grid-container>
//         {/* <!-- Different Spacing at Different Breakpoints --> */}
//         <dga-grid-container spacingXs={1} spacingSm={2} spacingMd={3} spacingLg={4}>
//           <dga-grid-item xs={6}>
//             <div class="demo-content">Different spacing at different screen sizes</div>
//           </dga-grid-item>
//           <dga-grid-item xs={6}>
//             <div class="demo-content">Different spacing at different screen sizes</div>
//           </dga-grid-item>
//         </dga-grid-container>
//         {/* <!-- Auto-layout Grid --> */}
//         <dga-grid-container spacing={2}>
//           <dga-grid-item xs>
//             <div class="demo-content">Auto width 1</div>
//           </dga-grid-item>
//           <dga-grid-item xs>
//             <div class="demo-content">Auto width 2</div>
//           </dga-grid-item>
//           <dga-grid-item xs>
//             <div class="demo-content">Auto width 3</div>
//           </dga-grid-item>
//         </dga-grid-container>
//         {/* <!-- Nested Grids --> */}
//         <dga-grid-container spacing={2}>
//           <dga-grid-item xs={12} sm={6}>
//             <div class="demo-content">
//               <h3>Nested Grid</h3>
//               <dga-grid-container spacing={1}>
//                 <dga-grid-item xs={6}>
//                   <div class="demo-content nested">Nested item 1</div>
//                 </dga-grid-item>
//                 <dga-grid-item xs={6}>
//                   <div class="demo-content nested">Nested item 2</div>
//                 </dga-grid-item>
//               </dga-grid-container>
//             </div>
//           </dga-grid-item>
//           <dga-grid-item xs={12} sm={6}>
//             <div class="demo-content">Regular item</div>
//           </dga-grid-item>
//         </dga-grid-container>
//         {/* <!-- Item Alignment Example --> */}
//         <dga-grid-container spacing={2} style={{height: "200px"}}>
//           <dga-grid-item xs={4} alignSelf="flex-start">
//             <div class="demo-content">Align start</div>
//           </dga-grid-item>
//           <dga-grid-item xs={4} alignSelf="center">
//             <div class="demo-content">Align center</div>
//           </dga-grid-item>
//           <dga-grid-item xs={4} alignSelf="flex-end">
//             <div class="demo-content">Align end</div>
//           </dga-grid-item>
//         </dga-grid-container>
//         {/* <!-- Growing and Shrinking Items --> */}
//         <dga-grid-container spacing={2}>
//           <dga-grid-item xs={3}>
//             <div class="demo-content">Fixed width</div>
//           </dga-grid-item>
//           <dga-grid-item xs grow>
//             <div class="demo-content">Grow to fill space</div>
//           </dga-grid-item>
//           <dga-grid-item xs={3}>
//             <div class="demo-content">Fixed width</div>
//           </dga-grid-item>
//         </dga-grid-container>
//         {/* <!-- Item Ordering Example --> */}
//         <dga-grid-container spacing={2}>
//           <dga-grid-item xs={4} orderXs={3} orderMd={1}>
//             <div class="demo-content">First on desktop, last on mobile</div>
//           </dga-grid-item>
//           <dga-grid-item xs={4} orderXs={1} orderMd={2}>
//             <div class="demo-content">Second on desktop, first on mobile</div>
//           </dga-grid-item>
//           <dga-grid-item xs={4} orderXs={2} orderMd={3}>
//             <div class="demo-content">Third on desktop, second on mobile</div>
//           </dga-grid-item>
//         </dga-grid-container>
//         {/* <!-- Fluid Container with No Gutters --> */}
//         <dga-grid-container fluid disableGutters spacing={0}>
//           <dga-grid-item xs={12} md={6}>
//             <div class="demo-content">Full-width fluid container with no gutters</div>
//           </dga-grid-item>
//           <dga-grid-item xs={12} md={6}>
//             <div class="demo-content">Full-width fluid container with no gutters</div>
//           </dga-grid-item>
//         </dga-grid-container>
//       </div>
//     );
//   }
// }
import { h } from "@stencil/core";
export class DgaGridUsage {
    render() {
        return (h("div", { key: '9bcabf927dc888982b5479164254be2cae54100a', class: "flexible-gap-usage", style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            } }, h("h2", { key: '25f5f810a72e06aa4748ae195d2d8e075d1aaaaa' }, "Grid Component with Flexible Gap Examples"), h("section", { key: '5a693a786235985daaefc4dd3695d40a98536a3a' }, h("h3", { key: '74bad73316d20c87d1231cedff1fadb50f7bc53b' }, "Simple String Gap"), h("dga-grid-container", { key: '4de2ee665886ceb05ba8c799aa71dc631c079302', gap: "16px" }, h("dga-grid-item", { key: 'aeef5999bf222efb2b4fa15ba25e43fc865d9349', xs: 12, sm: 6, md: 4 }, h("div", { key: '77f189d4cb3924d19e4ae6f01a380bd7c9320aa6', class: "demo-content" }, "16px gap between all items")), h("dga-grid-item", { key: '972318b8e52daa9802e820e60024443fc6014ce5', xs: 12, sm: 6, md: 4 }, h("div", { key: 'a46efbe3ae030c3e7f9387d85633962180e2812c', class: "demo-content" }, "16px gap between all items")), h("dga-grid-item", { key: '1723355b081cb8e99cf8621761ab35713cfce214', xs: 12, sm: 6, md: 4 }, h("div", { key: 'bd27c07d6fd51b1b0de7a870dee244f924acf78f', class: "demo-content" }, "16px gap between all items")), h("dga-grid-item", { key: '7acd60b5c7a70ad347258d8e98281cd63ee82e0e', xs: 12, sm: 6 }, h("div", { key: 'd6958f91452d652a3154051df775e1cc1987aed1', class: "demo-content" }, "16px gap between all items")), h("dga-grid-item", { key: 'ff3a6f76f1c7de8de9085d51cecb275108564d6e', xs: 12, sm: 6 }, h("div", { key: '55b335369c11a21761a1bd2e5ece1e68f2669ca1', class: "demo-content" }, "16px gap between all items")), h("dga-grid-item", { key: '58ad9dbb2f4635bf880317151bc2c39ced95743d', xs: 12 }, h("div", { key: '9012a600511e9db43a6fcb6fefe1ea1c5f0378f9', class: "demo-content" }, "16px gap between all items"))))));
    }
    static get is() { return "dga-grid-usage"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-grid-usage.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-grid-usage.css"]
        };
    }
}
