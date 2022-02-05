# WSD-CAT2
Repo for WSD CAT Test 2 (05/02/2022)

# Screenshot

![screenshot](https://raw.githubusercontent.com/AshwinKumar-V9/WSD-CAT2/main/.github/images/WSD_CAT2_Screenshot.jpg)

# Question

The Post Graduate students of Department of Computer Science, CHRIST (Deemed to be
University) is organizing a online national-level IT fest called “Gateways 2022”, with the
theme “TECHNOVID” on Dec 12 and 13, 2022.You are asked to create a simple registration
form for this IT-fest. The fields should include name, email, branch, college/university name,
State, Address, age, Phone number, Username and Password. Write a JavaScript to validate
all fields using regular expressions with the following conditions
a) Name field should accept only characters and you should lock the digit keys
b) Phone number field should have exactly 10 digits (you should lock the character keys)
c) Passwords must satisfy the following conditions and auto suggestion need to be enabled
when the user typing the password
 a minimum of 1 lower case letter [a-z] and
 a minimum of 1 upper case letter [A-Z] and
 a minimum of 1 numeric character [0-9] and
 1 special character: ~`!@#$%^&amp;*()-_+={}[]|\;:&quot;&lt;&gt;,./?
 At least 1 upper case, numeric, and special character must be EMBEDDED somewhere in
the middle of the password, and not just be the first or the last character of the password
string.
(Note: Display all the above condition in red color (Below your password text box) and
convert into green color whenever user satisfies the respective condition)
d) Only official mail will be accepted in the field of email (E.g. username
college/universityname.in).
e) Age should not be negative number
f) First character should be capital letter in username (It has to convert into capital letter
automatically even when user tries to type small character)
g) Prevent the user to move to the next text fields unless valid input is entered and store
username and email in cookies
h)Add their phone number and email in Local Storage
After Successful registration you are expected to maintain their detail in the form of XML
file(manually) .The XML template should be:
&lt;CHRIST&gt;

&lt;COMPUTER-SCIENCE&gt;
&lt;STU-NAME&gt;XYZ&lt;/STU_NAME&gt;
&lt;STU-UNIVERSITY&gt;ABC&lt;/STU-UNIVERSITY&gt;
&lt;STU-PHONE&gt;1234567890&lt;/STU-PHONE&gt;
&lt;STU-EMAIL&gt;XYZ@GMAIL&gt;COM
&lt;/COMPUTER-SCIENCE&gt;
&lt;/CHRIST&gt;

Makeup sample data for 3 students. Write a JavaScript to display only student name and
university name using DOM parser.
Evaluation Criteria: Total (20 Marks)
Website Design and Cookies: 5 Marks
Validations: 10 Marks
XML File and DOM Parser:5 Marks