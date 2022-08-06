import "../scss/style";

import AAA from "./sub";

const root: HTMLElement | null = document.querySelector("#root");

const aaa = new AAA("hello");
aaa.bbb(root);