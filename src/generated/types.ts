/**
 * Generated by @thi.ng/wasm-api-bindgen at 2023-03-27T22:45:51.037Z
 * DO NOT EDIT!
 */

// @ts-ignore possibly includes unused imports
import { Pointer, WasmStringPtr, type MemorySlice, type WasmTypeBase, type WasmTypeConstructor } from "@thi.ng/wasm-api";

/**
 * Style configuration settings
 */
export interface StyleConfig extends WasmTypeBase {
	/**
	 * CSS background color
	 */
	bg: WasmStringPtr;
	/**
	 * Font family
	 */
	font: WasmStringPtr;
	/**
	 * Font size enum
	 */
	size: FontSize;
}

export const $StyleConfig: WasmTypeConstructor<StyleConfig> = (mem) => ({
	get align() {
		return 4;
	},
	get size() {
		return 12;
	},
	instanceArray(base, num) {
		const items: StyleConfig[] = [];
		for (; num --> 0; base += 12) items.push(this.instance(base));
		return items;
	},
	instance: (base) => {
		let $bg: WasmStringPtr | null = null;
		let $font: WasmStringPtr | null = null;
		return {
			get __base() {
				return base;
			},
			get __bytes() {
				return mem.u8.subarray(base, base + 12);
			},
			get bg(): WasmStringPtr {
				return $bg || ($bg = new WasmStringPtr(mem, base, true));
			},
			get font(): WasmStringPtr {
				return $font || ($font = new WasmStringPtr(mem, (base + 4), true));
			},
			get size(): FontSize {
				return mem.u8[(base + 8)];
			},
			set size(x: FontSize) {
				mem.u8[(base + 8)] = x;
			},
		};
	}
});

export enum FontSize {
	SMALL = 14,
	MEDIUM = 18,
	LARGE = 24,
}
