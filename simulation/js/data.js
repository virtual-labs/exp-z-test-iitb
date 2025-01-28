let alpha = 0.05;
// ======= Activity 1 variable ====== //
let N = 30;
let k = -7.1;
let epsilon = [
    0.378, 0.306, -0.156, 0.194, 0.442, -0.523, -0.143, -0.119, -0.5, 0.013,
    -0.472, -0.43, 0.513, -0.366, 0.47, -0.514, -0.126, 0.465, -0.52, 0.313,
    -0.318, 0.322, -0.228, 0.481, -0.315, -0.309, -0.446, -0.557, 0.574, -0.168,
];
let x0 = [
    0.782, 1.68, 7.488, 7.968, 12.901, 13.165, 20.595, 22.118, 26.207, 28.129,
    31.109, 35.759, 37.593, 37.629, 38.485, 42.527, 43.345, 45.625, 47.262,
    48.749, 60.501, 64.341, 74.185, 77.826, 78.316, 87.867, 92.306, 93.653,
    94.406, 94.488,
];
let X = [
    -36.252, -21.037, -13.489, -7.252, -6.04, -4.871, -1.872, 3.046, 7.083,
    10.874, 26.299, 29.357, 30.454, 30.593, 31.44, 36.498, 41.023, 48.552,
    50.164, 52.642, 54.665, 58.67, 78.324, 78.614, 82.894, 86.065, 89.562,
    94.766, 123.275, 148.642,
];
let sum_x = 1202.689;
let X_bar = 40.09;
let mu_0 = 33.452;
let sigma = -3.635;
let z_0 = -1.826;
// let alpha_dd_options = [0.05, 0.01, 0.1];
let alpha_dd_options = [0.05, 0.01];
let z_table_data = z_table.map((data) => {
    let arr = [];
    arr.push(data.z);
    arr.push(data['0.01']);
    arr.push(data['0.05']);
    return arr;
});
let hypo_test_reject_op = 1;
// ========== activity2 variable ==========//
let X_dash = [
    -19.686, -11.151, -6.916, -3.417, -2.737, -2.082, -0.399, 2.36, 4.625,
    6.751, 15.405, 17.12, 17.736, 17.814, 18.289, 21.126, 23.665, 27.889,
    28.793, 30.183, 31.318, 33.565, 44.591, 44.753, 47.155, 48.933, 50.895,
    53.815, 69.808, 84.039,
];
let X_dash_bar = 694.24;
let mu_dash_0 = 695.549;
let sigma_dash = -5.003;
let z_dash_0 = 0.262;
let hypo_test_reject_op_a2 = 1;
//# sourceMappingURL=data.js.map