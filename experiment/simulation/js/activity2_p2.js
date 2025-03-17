function activity2_p2() {
    let btn = (document.getElementById('act2-p1-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('z-table', 'act2-z-table-div');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collpase divide fs-18px fb-500" style="text-align:left;" id="act2-z-table-div">
         <div>
            If |z'<sub>0</sub>| is in range of z<sub>&alpha;<sub>h</sub>/2</sub> then accept the null hypothesis i.e. the population mean may near to hypothesised mean i.e. &mu; &approx; &mu;<sub>0</sub>. Else reject the null hypothesis i.e. the population mean is not same as hypothesised mean i.e. &mu; &ne; &mu;<sub>0</sub>.
         </div>
         <div class="row justify-content-center fs-20px" style="align-items:center;">
            <div class="col-lg-3">
               $$ z_{\\alpha_h/2} = \\pm1.645 $$
            </div>
            <div class="col-lg-3">
               $$ z'_0 = \\frac{\\bar{X'} - \\mu'_0}{\\sigma'} = ${z_dash_0} $$
            </div>
         </div>
         <div class="fs-16px">
            What do you conclude from this?
         </div>
         <br>
         <div class="row justify-content-center " style="align-items:center;">
            <div class="col-lg-5" >
               <button id="act2-p2-null-hypo-btn1" onclick="a2_vf_null_hypo('1')" style='border: 1px solid gray; width: 100%; text-align: center;'>
               
                  Reject the null hypothesis

               </button>
            </div>
            <div class="col-lg-5">
               <button id="act2-p2-null-hypo-btn2" onclick="a2_vf_null_hypo('2')" style='border: 1px solid gray; width: 100%; text-align: center; margin-top:5px;'>
                  
                  Accept the null hypothesis

               </button>
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p2-btn-2' onclick='activity3()' >Next</button>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-z-table-div');
    }, 150);
    a2_find_null_hypothesis();
}
function a2_find_null_hypothesis() {
    if (Math.abs(z_dash_0) > -1.645 && Math.abs(z_dash_0) < 1.645) {
        hypo_test_reject_op_a2 = 2;
    }
    else {
        hypo_test_reject_op_a2 = 1;
    }
}
function a2_vf_null_hypo(id) {
    let msg = '';
    let btn = (document.getElementById(`act2-p2-null-hypo-btn${id}`));
    let next_btn = (document.getElementById('act2-p2-btn-2'));
    if (hypo_test_reject_op_a2 == 1) {
        msg = 'Null Hypothesis Rejected';
    }
    else if (hypo_test_reject_op_a2 == 2) {
        msg = 'We accept null hypothesis';
    }
    if (parseInt(id) == hypo_test_reject_op_a2) {
        alert(`You are correct!! ${msg}`);
        btn.style.backgroundColor = 'yellow';
        btn.removeEventListener('click', a2_vf_null_hypo);
        btn.removeAttribute('onclick');
        document
            .getElementById(`act2-p2-null-hypo-btn${3 - id}`)
            .removeAttribute('onclick');
        next_btn.style.display = 'block';
    }
    else {
        alert(`You have chosen incorrect option, observe the results again.`);
    }
}
// activity2_p2();
//# sourceMappingURL=activity2_p2.js.map