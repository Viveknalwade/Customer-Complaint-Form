function validateForm() {
	  const fullName = document.getElementById('full-name');
	  const email = document.getElementById('email');
	  const orderNo = document.getElementById('order-no');
	  const productCode = document.getElementById('product-code');
	  const quantity = document.getElementById('quantity');
	  const complaintsGroup = document.getElementById('complaints-group');
	  const complaintDescription = document.getElementById('complaint-description');
	  const solutionsGroup = document.getElementById('solutions-group');
  const solutionDescription = document.getElementById('solution-description');
	  const otherComplaint = document.getElementById('other-complaint');
	  const otherSolution = document.getElementById('other-solution');

  const validationResults = {
	    'full-name': fullName.value.trim() !== '',
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value),
	    'order-no': /^2024\d{6}$/.test(orderNo.value),
   'product-code': /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(productCode.value),
    quantity: quantity.value > 0 && Number(quantity.value) === parseInt(quantity.value),
	    'complaints-group': Array.from(complaintsGroup.querySelectorAll('input[type="checkbox"]')).some(checkbox => checkbox.checked),
    'complaint-description': !otherComplaint.checked || complaintDescription.value.length >= 20,
    'solutions-group': Array.from(solutionsGroup.querySelectorAll('input[type="radio"]')).some(radio => radio.checked),
    'solution-description': !otherSolution.checked || solutionDescription.value.length >= 20,
	  };
	
  return validationResults;
}

	// Function to check if form is valid
function isValid(validationResults) {
	  return Object.values(validationResults).every(result => result);
	}
	
	// Add event listeners to form fields
	document.getElementById('form').addEventListener('submit', (e) => {
  const validationResults = validateForm();
	  if (!isValid(validationResults)) {
	    e.preventDefault();
	    Object.keys(validationResults).forEach((field) => {
	      const element = document.getElementById(field);
      if (!validationResults[field]) {
        element.style.borderColor = 'red';
      } else {
	        element.style.borderColor = 'green';
      }
	    });
  }
	});
	
	document.querySelectorAll('#form input, #form textarea').forEach((field) => {
	  field.addEventListener('change', () => {
	    const validationResults = validateForm();
	    Object.keys(validationResults).forEach((key) => {
	      const element = document.getElementById(key);
	      if (element === field) {
        if (validationResults[key]) {
          element.style.borderColor = 'green';
	        } else {
	          element.style.borderColor = 'red';
        }
	      }
    });
	  });
	});

	document.querySelectorAll('#complaints-group input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
	    const complaintsGroup = document.getElementById('complaints-group');
	    const validationResults = validateForm();
    if (validationResults['complaints-group']) {
	      complaintsGroup.style.borderColor = 'green';
	    } else {
	      complaintsGroup.style.borderColor = 'red';
	    }
	  });
	});
	
	document.querySelectorAll('#solutions-group input[type="radio"]').forEach((radio) => {
	  radio.addEventListener('change', () => {
   const solutionsGroup = document.getElementById('solutions-group');
	    const validationResults = validateForm();
    if (validationResults['solutions-group']) {
	      solutionsGroup.style.borderColor = 'green';
    } else {
      solutionsGroup.style.borderColor = 'red';
	    }
  });
	});
