// subject wise gpa and grade function

const subjectResult = (marks) => {
	let subject_gpa;
	let subject_grade;

	if (marks >= 0 && marks < 33) {
		subject_gpa = 0;
		subject_grade = 'F';
	} else if (marks >= 33 && marks < 40) {
		subject_gpa = 1;
		subject_grade = 'D';
	} else if (marks >= 40 && marks < 50) {
		subject_gpa = 2;
		subject_grade = 'C';
	} else if (marks >= 50 && marks < 60) {
		subject_gpa = 3;
		subject_grade = 'B';
	} else if (marks >= 60 && marks < 70) {
		subject_gpa = 3.5;
		subject_grade = 'A-';
	} else if (marks >= 70 && marks < 80) {
		subject_gpa = 4;
		subject_grade = 'A';
	} else if (marks >= 80 && marks <= 100) {
		subject_gpa = 5;
		subject_grade = 'A+';
	} else {
		subject_gpa = 'Invalid GPA';
		subject_grade = 'Invalid Grade';
	}

	return {
		subject_gpa,
		subject_grade,
	};
};

// total Gpa and Grade function

const TotalGrade_Gpa = (bangla, english, math, physics, chemistry, biology) => {
	let GRADE;
	let gpa_cal =
		(bangla.subject_gpa +
			english.subject_gpa +
			math.subject_gpa +
			physics.subject_gpa +
			chemistry.subject_gpa +
			biology.subject_gpa) /
		6;

	if (gpa_cal >= 1 && gpa_cal < 2) {
		GRADE = 'D';
	} else if (gpa_cal >= 2 && gpa_cal < 3) {
		GRADE = 'C';
	} else if (gpa_cal >= 3 && gpa_cal < 3.5) {
		GRADE = 'B';
	} else if (gpa_cal >= 3.5 && gpa_cal < 4) {
		GRADE = 'A-';
	} else if (gpa_cal >= 4 && gpa_cal < 5) {
		GRADE = 'A';
	} else if ((gpa_cal = 5)) {
		GRADE = 'A+';
	}

	if (
		bangla.subject_gpa == 0 ||
		english.subject_gpa == 0 ||
		math.subject_gpa == 0 ||
		physics.subject_gpa == 0 ||
		chemistry.subject_gpa == 0 ||
		biology.subject_gpa == 0
	) {
		return {
			STATUS: 'Failed',
			GPA: '0',
			GRADE: 'F',
		};
	} else {
		return {
			STATUS: 'Passed',
			GPA: gpa_cal.toFixed(2),
			GRADE: GRADE,
		};
	}
};

// getAll data from local Storage

const getAllLSData = (key) => {
	if (localStorage.getItem(key)) {
		return JSON.parse(localStorage.getItem(key));
	} else {
		return false;
	}
};

// send data to local storage

const sendData = (key, data) => {
	let lsData = [];

	if (localStorage.getItem(key)) {
		lsData = JSON.parse(localStorage.getItem(key));
	}

	lsData.push(data);
	localStorage.setItem(key, JSON.stringify(lsData));
};

// alert Message

const alertMessage = (msg, type = 'danger') => {
	return `<p class="alert alert-${type} d-flex justify-content-between">
    ${msg}
    <button class="btn-close" data-bs-dismiss="alert"></button>
</p>`;
};

// create random number


