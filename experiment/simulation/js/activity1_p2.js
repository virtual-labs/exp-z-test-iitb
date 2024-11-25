function activity1_p2() {
    let btn = (document.getElementById('act1-p1-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Conclusion', 'z-table-div');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collpase divide fs-18px fb-500" style="text-align:left;" id="z-table-div">
         <div>
            If |z<sub>0</sub>| is in range of z<sub>&alpha;<sub>h</sub>/2</sub> then accept the null hypothesis i.e. the population mean may near to hypothesised mean i.e. &mu; &approx; &mu;<sub>0</sub>. Else reject the null hypothesis i.e. the population mean is not same as hypothesised mean i.e. &mu; &ne; &mu;<sub>0</sub>.
         </div>
         <div class="row justify-content-center fs-20px" style="align-items:center;">
            <div class="col-lg-3">
               $$ z_{\\alpha_h/2} = \\pm1.645 $$
            </div>
            <div class="col-lg-3">
               $$ z_0 = \\frac{\\bar{X} - \\mu_0}{\\sigma} = ${z_0} $$
            </div>
         </div>
         <div class="fs-16px">
            What do you conclude from this?
         </div>
         <br>
         <div class="row justify-content-center " style="align-items:center;">
            <div class="col-lg-5" >
               <button id="null-hypo-btn1" onclick="vf_null_hypo('1')" style='border: 1px solid gray; width: 100%; text-align: center;'>
                  
                  Reject the null hypothesis
               
               </button>
            </div>
            <div class="col-lg-5">
               <button id="null-hypo-btn2" onclick="vf_null_hypo('2')" style='border: 1px solid gray; width: 100%; text-align: center; margin-top:5px;'>
               
                  Accept the null hypothesis
               
               </button>
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p2-btn-2' onclick='activity2()' >Activity 2</button>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
    hide_all_steps();
    setTimeout(() => {
        show_step('z-table-div');
    }, 150);
    find_null_hypothesis();
}
function find_null_hypothesis() {
    if (Math.abs(z_0) > -1.645 && Math.abs(z_0) < 1.645) {
        hypo_test_reject_op = 2;
    }
    else {
        hypo_test_reject_op = 1;
    }
}
function vf_null_hypo(id) {
    let msg = '';
    let btn = (document.getElementById(`null-hypo-btn${id}`));
    let next_btn = (document.getElementById('act1-p2-btn-2'));
    if (hypo_test_reject_op == 1) {
        msg = 'Null Hypothesis Rejected';
    }
    else if (hypo_test_reject_op == 2) {
        msg = 'We accept null hypothesis';
    }
    if (parseInt(id) == hypo_test_reject_op) {
        alert(`You are correct!! ${msg}`);
        btn.style.backgroundColor = 'yellow';
        btn.removeEventListener('click', vf_null_hypo);
        btn.removeAttribute('onclick');
        document
            .getElementById(`null-hypo-btn${3 - id}`)
            .removeAttribute('onclick');
        next_btn.style.display = 'block';
    }
    else {
        alert(`You have chosen incorrect option, observe the results again.`);
    }
}
// activity1_p2();
//# sourceMappingURL=activity1_p2.js.map