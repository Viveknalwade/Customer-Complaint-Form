# Customer-Complaint-Form

## Objective: 
Fulfill the user stories below and get all the tests to pass to complete the lab.
## User Stories:
1.	When the form is submitted, you should ensure that:
•	#full-name is not empty.
•	#email is a valid email address format.
•	#order-no is a sequence of ten numbers starting with 2024.
•	#product-code follows the pattern XX##-X###-XX#, where X represents either a lowercase letter or an uppercase letter and # represents a number.
•	#quantity is a positive integer.
•	at least one checkbox from #complaints-group is checked.
•	#complaint-description contains at least twenty characters if the Other checkbox is checked.
•	a radio button from #solutions-group is selected.
•	#solution-description contains at least twenty characters if the Other radio button is selected.
2.	You should have a function named validateForm that returns an object containing the following keys: full-name, email, order-no, product-code, quantity, complaints-group, complaint-description, solutions-group, and solution-description. The value of each key should be true if the corresponding form field is correctly filled and false otherwise.
3.	You should have a function named isValid that takes the object returned by validateForm as argument and returns true if every form field is correctly filled and false otherwise.
4.	If a change event is triggered on a form field and it has a valid value, you should set its border color to green. In case of checkbox and radio button groups, you should set the border color of the parent fieldset.
5.	If a change event is triggered on a form field and it has an invalid value, you should set its border color to red. In case of checkbox and radio button groups, you should set the border color of the parent fieldset.
6.	When you try to submit the form you should call isValid to validate the form.
7.	When you try to submit the form, if the form has any invalid field, each invalid field should be highlighted by setting the border color of each invalid input, textarea or fieldset (in case of checkbox and radio button groups) to red.
