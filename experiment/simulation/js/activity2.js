function activity2() {
    let btn = (document.getElementById('act1-p2-btn-2'));
    btn && btn.remove();
    X_dash = [];
    X_dash_bar = 0;
    let a = parseFloat((Math.random() * 2 - 1).toFixed(3));
    let b = parseFloat(Math.random().toFixed(3));
    for (let i = 0; i < X.length; i++) {
        X_dash.push(parseFloat((a * X[i] + b).toFixed(3)));
        X_dash_bar += X_dash[i];
    }
    X_dash.sort((a, b) => a - b);
    X_dash_bar = parseFloat((X_dash_bar / N).toFixed(3));
    mu_dash_0 = 0;
    mu_dash_0 = parseFloat((X_dash_bar + Math.random() * (2 * k) - k).toFixed(3));
    sigma_dash = 0;
    sigma_dash = parseFloat((Math.random() * 14 - 7).toFixed(3));
    console.log(X_dash);
    console.log(X_dash_bar);
    let text = `   
      <div class='divide'>
         <div style='margin-top: 2vw;'>
   
            <h4 class="fb-700 fs-28px" style="text-align:center">Activity 2</h4>
            <p class="fs-18px fb-500 text-center">
               Now make data of X as multiplying and adding random constants X<sup>'</sup> = aX + b
            </p>
            <br><br>

            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='act2-temp-btn-1' >Next</button>    
         </div>
      </div>
   `;
    maindiv.innerHTML += text;
    hide_all_steps();
}
function start_act2() {
    let temp_btn = (document.getElementById('act2-temp-btn-1'));
    temp_btn && temp_btn.remove();
    let btn_txt = get_collapse_btn_text('Generated Dataset', 'act2-div');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide center-text" id="act2-div">
         <p style="text-align:left" class="fs-18px">
            Consider the given data-set.
         </p>
         <div class='table-responsive' style='margin: auto;'>
            <table class='table table-bordered ' style='background-color: white;' >
               <tr id='x-dash-values'>
                  <th class='table-dark'>X<sup>'</sup></th>
               </tr>
            </table>
         </div>
         <br>

         <p class="fs-16px" style="text-align:left;">Calculate,</p>
   
         <div class="fs-18px">
            <div id="x-dash-bar-div">
               <div class="row" style="justify-content:center;align-items:center;">
                  <div class="col-lg-3">
                     $$ \\bar{X'} = \\frac {\\Sigma{X'}}{n} = $$
                  </div>
                  <div class="col-lg-3" >
                     <input type='number' id='x-dash-bar-inp' class='form-control fs-16px' />
                  </div>
               </div>
               <br>
               <button class='btn btn-info std-btn' onclick='verify_x_dash_bar();' style='position: relative; left: 0w;' id='vf-x-dash-bar-btn'>Verify</button>
            </div>
         </div> 
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
    load_x_dash_values();
}
function load_x_dash_values() {
    let x_val = (document.getElementById('x-dash-values'));
    for (let i = 0; i < X_dash.length; i++) {
        console.log(X_dash[i]);
        x_val.innerHTML += `<td>${X_dash[i]}</td>`;
    }
}
function verify_x_dash_bar() {
    let div = (document.getElementById('x-dash-bar-div'));
    let x_dash_inp = (document.getElementById('x-dash-bar-inp'));
    console.log(X_dash_bar);
    if (!verify_values(parseFloat(x_dash_inp.value), X_dash_bar)) {
        x_dash_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        x_dash_inp.style.border = '1px solid #ced4da';
        x_dash_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    z_dash_0 = 0;
    z_dash_0 = parseFloat(((X_dash_bar - mu_dash_0) / sigma_dash).toFixed(3));
    div.innerHTML = '';
    div.innerHTML = `
   <div class="row" style="justify-content:center;align-items:center;" >
      <div class="col-lg-3">
         $$ \\bar{X'} = \\frac {\\Sigma{X'}}{n} = ${X_dash_bar} $$
      </div>
      <div class="col-lg-3">
         $$ \\mu_0' = ${mu_dash_0} $$
      </div>
      <div class="col-lg-3">
         $$ \\sigma' = ${sigma_dash} $$
      </div>
   </div>
   <br>
   <div>
      <p style="text-align:left;">
         Calculate z-score(test statistics) by given formula
      </p>
      <br>
      <div id="z-dash-0-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-lg-3">
               $$ z'_0 = \\frac {\\bar{X'} - \\mu'_0}{\\sigma'} = $$
            </div>
            <div class="col-lg-3" style="text-align:left">
               <input type='number' id='z-dash-0-inp' class='form-control fs-16px' />
            </div>
         </div>
         <button class='btn btn-info std-btn' onclick='verify_z_dash_0();' style='position: relative; left: 0w;' id='vf-z-dash-0-btn'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function verify_z_dash_0() {
    let z_dash_div = (document.getElementById('z-dash-0-div'));
    let z_dash_inp = (document.getElementById('z-dash-0-inp'));
    console.log(z_dash_0);
    if (!verify_values(parseFloat(z_dash_inp.value), z_dash_0)) {
        z_dash_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        z_dash_inp.style.border = '1px solid #ced4da';
        z_dash_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    z_dash_div.innerHTML = '';
    z_dash_div.innerHTML = `
   <div class="row justify-content-center" style="align-items:center;">
      <div class="col-lg-3">
         $$ z'_0 = \\frac {\\bar{X'} - \\mu'_0}{\\sigma'} = ${z_dash_0} $$
      </div>
   </div>
   <br>
   <button class='btn btn-info std-btn' style='margin: auto;' id='act2-btn-1' onclick='activity2_p1()' >Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
// activity2();
//# sourceMappingURL=activity2.js.map