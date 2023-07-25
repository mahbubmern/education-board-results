const insertForm = document.getElementById('insertForm');
const h2 = document.querySelector('h2');
const img = document.querySelector('.spinner img');

const msg = document.querySelector('.msg');

insertForm.onsubmit = (e) => {
	e.preventDefault();

	const formData = new FormData(e.target);
	const data = Object.fromEntries(formData.entries());
	const {
		name,
		roll,
		father_name,
		mother_name,
		reg,
		board,
		group,
		college,
		bangla,
		bangla_marks,
		english,
		english_marks,
		math,
		math_marks,
		physics,
		physics_marks,
		chemistry,
		chemistry_marks,
		biology,
		biology_marks,
	} = data;

	let getData = getAllLSData('students');

	let findRoll = getData.some(checkRoll);
	function checkRoll(element) {
		return element.roll == roll;
	}

	let findReg = getData.some(checkReg);
	function checkReg(element) {
		return element.reg == reg;
	}

	if (
		!data.name ||
		!data.roll ||
		!data.father_name ||
		!data.mother_name ||
		!data.reg ||
		!data.board ||
		!data.group ||
		!data.college ||
		!data.bangla ||
		!data.bangla_marks ||
		!data.english ||
		!data.english_marks ||
		!data.math ||
		!data.math_marks ||
		!data.physics ||
		!data.physics_marks ||
		!data.chemistry ||
		!data.chemistry_marks ||
		!data.biology ||
		!data.biology_marks
	) {
		msg.innerHTML = alertMessage('All fields are required');
	} else if (findReg) {
		img.style.display = 'block';
		setTimeout(() => {
			img.style.display = 'none';
			msg.innerHTML = alertMessage('Reg No Already Exist');
		}, 1000);
	} else if (findRoll) {
		img.style.display = 'block';
		setTimeout(() => {
			img.style.display = 'none';
			msg.innerHTML = alertMessage('Roll No Already Exist');
		}, 1000);
	} else {
		img.style.display = 'block';
		setTimeout(() => {
			img.style.display = 'none';
			let Bangla = subjectResult(bangla_marks);
			let English = subjectResult(english_marks);
			let Math = subjectResult(math_marks);
			let Phy = subjectResult(physics_marks);
			let Che = subjectResult(chemistry_marks);
			let Bio = subjectResult(biology_marks);

			let totalResult = TotalGrade_Gpa(Bangla, English, Math, Phy, Che, Bio);
			sendData('students', {
				name: name,
				roll: roll,
				father_name: father_name,
				mother_name: mother_name,
				reg: reg,
				board: board,
				group: group,
				college: college,
				bangla: bangla,
				bangla_marks: bangla_marks,
				english: english,
				english_marks: english_marks,
				math: math,
				math_marks: math_marks,
				physics: physics,
				physics_marks: physics_marks,
				chemistry: chemistry,
				chemistry_marks: chemistry_marks,
				biology: biology,
				biology_marks: biology_marks,
				banglaGpa: `${Bangla.subject_gpa}`,
				englishGpa: `${English.subject_gpa}`,
				mathGpa: `${Math.subject_gpa}`,
				phyGpa: `${Phy.subject_gpa}`,
				cheGpa: `${Che.subject_gpa}`,
				bioGpa: `${Bio.subject_gpa}`,
				banglaGrade: `${Bangla.subject_grade}`,
				englishGrade: `${English.subject_grade}`,
				mathGrade: `${Math.subject_grade}`,
				phyGrade: `${Phy.subject_grade}`,
				cheGrade: `${Che.subject_grade}`,
				bioGrade: `${Bio.subject_grade}`,
				totalStatus: `${totalResult.STATUS} `,
				totalGPA: `${totalResult.GPA}`,
				totalGrade: `${totalResult.GRADE} `,
			});
			e.target.reset();
		}, 1500);

		setTimeout(() => {
			msg.innerHTML = alertMessage('Data Saved Successfull', 'success');
		}, 1501);

		setTimeout(() => {
			msg.innerHTML = '';
		}, 2501);
	}
};
