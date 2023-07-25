const submitForm = document.getElementById("submitForm");
const result = document.querySelector(".result");
const search = document.querySelector(".search");
const searchmsg = document.querySelector(".searchmsg");
const random1 = document.querySelector(".random1");
const random2 = document.querySelector(".random2");

const genRandomNumber = () => {
  return Math.floor(Math.random() * 10 + 1);
};

let number1 = genRandomNumber();
let number2 = genRandomNumber();

random1.innerHTML = `<b>${number1} +</b> `;
random2.innerHTML = `<b>${number2}</b>`;

let Tsum = number1 + number2;

submitForm.onsubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  const { exam, board, year, roll, reg, sum } = data;

  let getData = getAllLSData("students");

  let findRoll = getData.some(checkRoll);
  let findReg = getData.some(checkReg);

  function checkRoll(element) {
    return element.roll == roll;
  }

  function checkReg(element) {
    return element.reg == reg;
  }

  let searchResult = getData.find((data) => data.roll == roll);

  //   let color = "";
  //   if (searchResult.totalGPA > 0) {
  //     color = "green";
  //   } else {
  //     color = "red";
  //   }

  if (!roll) {
    searchmsg.innerHTML = alertMessage("Roll No Empty");
  } else if (!findRoll) {
    searchmsg.innerHTML = alertMessage("Check Roll No");
  } else if (!reg) {
    searchmsg.innerHTML = alertMessage("Reg No Empty");
  } else if (!findReg) {
    searchmsg.innerHTML = alertMessage("Check Reg No");
  } else if (!sum) {
    searchmsg.innerHTML = alertMessage("Please Input Sum");
  } else if (Tsum != sum) {
    searchmsg.innerHTML = alertMessage("Wrong Sum");
  } else {
    search.remove();

    result.innerHTML = `
		<div class="container my-3">
		<div class="row justify-content-center">
		  <div class="col-lg-6">
			<div class="card">
			  <div class="header d-flex">
				<div class="left">
				  <img src="./assets/images/bd_logo.png" alt="" />
				</div>
				<div class="right">
				  <div class="first">
					<span>Ministry of Education</span>
					<img src="./assets/images/banner_flag.jpg" alt="" />
				  </div>
	
				  <div class="second">
					<span
					  >Intermediate and Secondary Education Boards
					  Bangladesh</span
					>
				  </div>
				  <div class="third">
					<span>Official Website of Education Board </span>
				  </div>
				</div>
			  </div>
			  <div class="card-body">
				<h4 class="heading">HSC/Alim/Equivalent Result 2022</h4>
				<div class="stuDetails">
				  <div class="leftDetials d-flex">
					<div class="leftTitle">
					  <p>Roll No</p>
					  <p>Board</p>
					  <p>Group</p>
					  <p>Type</p>
					  <p>Result</p>
					  <p>GPA</p>
					</div>
					<div class="leftTitleDetails">
					  <p><b>${searchResult.roll}</b></p>
					  <p><b>${searchResult.board}</b></p>
					  <p><b>${searchResult.group}</b></p>
					  <p><b>REGULAR</b></p>
					  <p ><b>${searchResult.totalStatus}</b></p>
					  <p ><b>${searchResult.totalGPA}</b></p>
					</div>
				  </div>
				  <div class="rightDetials d-flex">
					<div class="rightTitle">
					  <p>Name</p>
					  <p>Father's Name</p>
					  <p>Mother's Name</p>
					  <p>Date of Birth</p>
					  <p>Institute</p>
					</div>
					<div class="rightTittleDetails">
					  <p><b>${searchResult.name}</b></p>
					  <p><b>${searchResult.father_name}</b></p>
					  <p><b>${searchResult.mother_name}</b></p>
					  <p>	<b>N/A</b></p>
					  <p><b>${searchResult.college}</b></p>
					</div>
				  </div>
				</div>
	
				<div class="resultSheet">
				  <h4 class="heading">Grade Sheet</h4>
				  <table class="table table-striped table-sm">
					<thead>
					  <tr>
						<th style="width:18%">Code</th>
						<th style="width:66%">Subject</th>
						<th style="width:18%">Grade</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<td>101</td>
						<td>${searchResult.bangla}</td>
						<td>${searchResult.banglaGrade}</td>
					  </tr>
	
					  <tr>
						<td>102</td>
						<td>${searchResult.english}</td>
						<td>${searchResult.englishGrade}</td>
					  </tr>
	
					  <tr>
						<td>103</td>
						<td>${searchResult.math}</td>
						<td>${searchResult.mathGrade}</td>
					  </tr>
	
					  <tr>
						<td>104</td>
						<td>${searchResult.physics}</td>
						<td>${searchResult.phyGrade}</td>
					  </tr>
	
					  <tr>
						<td>105</td>
						<td>${searchResult.biology}</td>
						<td>${searchResult.bioGrade}</td>
					  </tr>
	
					  <tr>
						<td>106</td>
						<td>${searchResult.chemistry}</td>
						<td>${searchResult.cheGrade}</td>
					  </tr>
					</tbody>
				  </table>
				  <a class="again" href="./search.html">Search Again</a>
				</div>
			  </div>
	
			  <div class="footer d-flex justify-content-between">
				<div class="footer-left">
				  <span
					>©2005-2023 Ministry of Education, All rights reserved.</span
				  >
				</div>
				<div class="footer-right">
				  <span>Powered by</span>
				  <img src="./assets/images/tbl_logo.png" alt="" />
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
		
		`;
  }
};
