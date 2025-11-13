import { h } from "@stencil/core";
// const orderedItems = [
//   {
//     type: 'ordered' as const,
//     level: 'one' as const,
//     label: 'First main point',
//     itemNumber: '1-'
//   },
//   {
//     type: 'ordered' as const,
//     level: 'two' as const,
//     label: 'Sub point A',
//     itemLetter: 'a-'
//   },
//   {
//     type: 'ordered' as const,
//     level: 'two' as const,
//     label: 'Sub point B',
//     itemLetter: 'b-'
//   },
//   {
//     type: 'ordered' as const,
//     level: 'one' as const,
//     label: 'Second main point',
//     itemNumber: '2-'
//   }
// ];
// const orderedItems = [
//   {
//     type: 'ordered' as const,
//     level: 'one' as const,
//     label: 'First main point',
//     itemNumber: '1-'
//   },
//   {
//     type: 'ordered' as const,
//     level: 'two' as const,
//     label: 'Sub point A',
//     itemLetter: 'a-'
//   },
//   {
//     type: 'ordered' as const,
//     level: 'two' as const,
//     label: 'Sub point B',
//     itemLetter: 'b-'
//   },
//   {
//     type: 'ordered' as const,
//     level: 'one' as const,
//     label: 'Second main point',
//     itemNumber: '2-'
//   }
// ];
// Example 2: Unordered List with Multiple Levels
// const unorderedItems = [
//   {
//     type: 'unordered' as const,
//     level: 'one' as const,
//     label: 'Frontend Technologies'
//   },
//   {
//     type: 'unordered' as const,
//     level: 'two' as const,
//     label: 'React'
//   },
//   {
//     type: 'unordered' as const,
//     level: 'two' as const,
//     label: 'Angular'
//   },
//   {
//     type: 'unordered' as const,
//     level: 'one' as const,
//     label: 'Backend Technologies'
//   },
//   {
//     type: 'unordered' as const,
//     level: 'two' as const,
//     label: 'Node.js'
//   },
//   {
//     type: 'unordered' as const,
//     level: 'two' as const,
//     label: 'Python'
//   }
// ];
// const iconItems = [
//   {
//     type: 'with-icon' as const,
//     level: 'one' as const,
//     label: 'Critical Issue',
//     icon: '<i class="hgi-stroke hgi-checkmark-circle-02"></i>'
//   },
//   {
//     type: 'with-icon' as const,
//     level: 'two' as const,
//     label: 'Database connection failed',
//     icon: '<i class="hgi-stroke hgi-checkmark-circle-02"></i>'
//   },
//   {
//     type: 'with-icon' as const,
//     level: 'one' as const,
//     label: 'Success',
//     icon: '<i class="hgi-stroke hgi-checkmark-circle-02"></i>'
//   },
//   {
//     type: 'with-icon' as const,
//     level: 'two' as const,
//     label: 'Backup completed',
//     icon: '<i class="hgi-stroke hgi-checkmark-circle-02"></i>'
//   }
// ];
export class DgaListUsage {
    render() {
        return (h("div", { key: '95d9ab6f98a2a29232eb88ce4c2fd1b40dfca634' }, h("h1", { key: '860332af62f89e22f4dbe957fad3eb829a0ba4aa' }, "List Example"), h("div", { key: 'fd931f6ebccc67d5a0c8f91b062ae2cc52bed514', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '4b085219989f1c513e98fa7c96f24ac8e3542698', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-list-v2", { key: '14535cb8e6c29a44c1b39d3c496a427f72a5e369', type: 'ordered', color: 'neutral' }, h("dga-list-item", { key: 'dc270c512fabb0d745c4b0f4e503f9639eb89509', type: "ordered", level: 'one', itemNumber: '1-', itemText: 'List item' }), h("dga-list-item", { key: '52a5c84ff47d535da1893b4f1d7dcb56d8191e54', type: "ordered", level: 'two', itemLetter: 'a-', itemText: 'List item' }), h("dga-list-item", { key: 'fc176494b7a663f16eb080ecf0eaaf235b93b36b', type: "ordered", level: 'two', itemLetter: 'b-', itemText: 'List item' }), h("dga-list-item", { key: '7356c9875e61f1e286f104e6d826b8a6ea8edf29', type: "ordered", level: 'one', itemNumber: '2-', itemText: 'List item' }), h("dga-list-item", { key: '87a4d05bdcaf05314e4d906161c26893647fba7b', type: "ordered", level: 'two', itemLetter: 'a-', itemText: 'List item' })), h("dga-list-v2", { key: 'f41ed3b14de089ca549d5771b2875b062dde7e9e', type: 'unordered', color: 'neutral' }, h("dga-list-item", { key: '4fff69d5769736033435fbff32108b9e19e47019', type: "unordered", level: 'one', itemText: 'List item' }), h("dga-list-item", { key: 'd7046deaee20cace8978d394f963c4b228a64e0d', type: "unordered", level: 'two', itemText: 'List item' }), h("dga-list-item", { key: '3c7ae64e1bc73b480ee67ee803882cf89f15e4d4', type: "unordered", level: 'two', itemText: 'List item' })), h("dga-list-v2", { key: '860305226f2a573bbaf432ac484a0574bd4b3627', type: 'with-icon', color: 'neutral' }, h("dga-list-item", { key: 'ec5b1aba907d34e1123844cd4a8b219f86a3e48b', type: "with-icon", level: 'one', icon: '<i  class="hgi-stroke hgi-checkmark-circle-02"></i>', itemText: 'List item' }), h("dga-list-item", { key: '100f4c98439c1a9cf908a3d79ffe468ad92377d1', type: "with-icon", level: 'two', icon: '<i  class="hgi-stroke hgi-checkmark-circle-02"></i>', itemText: 'List item' }), h("dga-list-item", { key: '0fec5060eced736810fdbb877c60162f1b62bff4', type: "with-icon", level: 'two', icon: '<i  class="hgi-stroke hgi-checkmark-circle-02"></i>', itemText: 'List item' }))))));
    }
    static get is() { return "dga-list-usage"; }
}
