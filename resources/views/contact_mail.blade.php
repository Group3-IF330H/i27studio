<p>Dear i27 Studio,</p>
<p>I hope this message finds you well. My name is <b>{{ $name }}</b>, representing <b>{{ $company }}</b>,
    and I am reaching out to inquire about your architectural services.</p>
<br>
<p>I have included our contact details below for your reference:</p>
<ul>
    <li>Email: <b>{{ $email }}</b></li>
    <li>Phone: <b>{{ $phone }}</b></li>
    <li>Location: <b>{{ $location }}</b></li>
</ul>
@if (isset($question) && !empty($question))
    <p>Regarding to our project, I have some question:</p>
    <p><b>{{ $question }}</b></p>
@endif
<br>
<p>We greatly appreciate your time and consideration. Looking forward to the possibility of working together and
    creating something exceptional.</p>
<br>
<p>Thank you.</p>
<p>Warm regards,</p>
<p><b>{{ $name }}</b></p>
