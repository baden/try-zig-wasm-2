//! Generated by @thi.ng/wasm-api-bindgen at 2023-02-10T20:14:56.939Z
//! DO NOT EDIT!

const std = @import("std");
const bindgen = @import("wasm-api-bindgen");

/// Style configuration settings
pub const StyleConfig = extern struct {
    /// CSS background color
    bg: bindgen.ConstStringPtr,
    /// Font family
    font: bindgen.ConstStringPtr,
    /// Font size enum
    size: FontSize,
};

pub const FontSize = enum(u8) {
    small = 14,
    medium = 18,
    large = 24,
};
