function activity2_p1() {
    let btn = (document.getElementById('act2-btn-1'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Selecting alpha value', 'act2-p1-div-alpha');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide" id="act2-p1-div-alpha">
         <h4>Selecting &alpha;<sub>h</sub> value</h4>

      <div>
         <ul>
      
             <li class="fs-16px">A critical value is a cutoff value that defines the boundaries beyond which less than 5% of sample means can be obtained if the null hypothesis is true. Sample means obtained beyond a critical value will result in a decision to reject the null hypothesis.
             </li>
      
             <li class="fs-16px">In a non-directional two-tailed test, we divide the alpha value in half so that an equal proportion of area is placed in the upper and lower tail. Table given below gives the critical values for one and two-tailed tests at a .05, .01, and .001 level of significance. Figure given below displays a graph with the critical values for given Example shown. In this example &alpha;<sub>h</sub> = .05, so we split this probability in half: 
                 <div style="text-align: center; font-size: 16px;">
                     Splitting  &alpha;<sub>h</sub> in half: <span class="fs-16px" style="display: inline-block">$$ \\frac{\\alpha_{h}}{2} = \\frac{0.05}{2} = 0.025$$</span> in each tail
                 </div>
      
                 <div class='row'>
      
                     <div class="col-lg-6">
                         <table class='table table-warning table-bordered'>
                           
                                 <tr>
                                     <th rowspan="2">Level of Significance (&alpha;<sub>h</sub>)</th>
                                     <th colspan="2">Type of test</th>
                                 </tr>
      
                                 <tr>
                                     <th>One-tailed</th>
                                     <th>Two-tailed</th>
                                 </tr>
      
                           
                           
                                 <tr>
                                     <td>0.05</td>
                                     <td>+1.645 or -1.645</td>
                                     <td>&plusmn;1.96</td>
                                 </tr>
      
                                 <tr>
                                     <td>0.01</td>
                                     <td>+2.33 or -2.33</td>
                                     <td>&plusmn;2.58</td>
                                 </tr>
      
                                 <tr>
                                     <td>0.001</td>
                                     <td>+3.09 or -3.09</td>
                                     <td>&plusmn;3.30</td>
                                 </tr>
                             
                         </table>
                     </div>
      
                     <div  class="col-lg-6">
                         <img src="./images/distribution.png" style="width: 100%;" alt="">
                     </div>
                 </div>
                 
             </li>
         </ul>
      
         <div class='fs-22px fb-600 center-text'>
            alpha(&alpha;) = ${alpha}
            <br>
            <br>
            <button class='btn btn-info std-btn' style='margin: auto;' id='act2-p1-btn-2' onclick='activity2_p2()' >Next</button>
         </div>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 50);
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-p1-div-alpha');
    }, 150);
    // act2_load_alpha_dd();
}
// function act2_load_alpha_dd() {
// 	let inp: HTMLSelectElement = <HTMLSelectElement>(
// 		document.getElementById('act2-p1-alpha-inp')
// 	);
// 	inp.innerHTML = ``;
// 	let default_op = new Option('--Select--', '0');
// 	inp.add(default_op);
// 	for (let i = 0; i < alpha_dd_options.length; i++) {
// 		let op = new Option(
// 			alpha_dd_options[i].toString(),
// 			alpha_dd_options[i].toString()
// 		);
// 		inp.add(op);
// 	}
// }
// //for setting alpha value
// function act2_set_alpha() {
// 	let inp: HTMLSelectElement = <HTMLSelectElement>(
// 		document.getElementById('act2-p1-alpha-inp')
// 	);
// 	let next_btn: HTMLDivElement = <HTMLDivElement>(
// 		document.getElementById('act2-p1-btn-2')
// 	);
// 	if (inp.value != '0') {
// 		alpha_a2 = parseFloat(inp.value);
// 		z_alpha_a2 = 0;
// 		let x = z_dash_0;
// 		let x1 = Math.ceil(x * 10) / 10;
// 		let x2 = Math.floor(x * 10) / 10;
// 		let y1;
// 		let y2;
// 		for (let i = 0; i < z_table.length; i++) {
// 			if (z_table[i].z === x2) {
// 				y2 = z_table[i][alpha_a2];
// 				y1 = z_table[i + 1][alpha_a2];
// 				break;
// 			}
// 		}
// 		let m = (y1 - y2) / (x1 - x2);
// 		let c = y1 - m * x1;
// 		z_alpha_a2 = parseFloat((m * x + c).toFixed(3));
// 		console.log(x1, x2);
// 		console.log(y1, y2);
// 		console.log('z_alpha_a2', z_alpha_a2);
// 		let s_2: HTMLDivElement = <HTMLDivElement>(
// 			document.getElementById('act2-p1-s2')
// 		);
// 		console.log('alpha', inp.value);
// 		s_2.innerHTML = `<h5>Selected &alpha; = ${alpha_a2.toFixed(2)}</h5>`;
// 		next_btn.style.display = 'block';
// 	} else {
// 		next_btn.style.display = 'none';
// 		alpha_a2 = 0;
// 	}
// }
// activity2_p1();
//# sourceMappingURL=activity2_p1.js.map