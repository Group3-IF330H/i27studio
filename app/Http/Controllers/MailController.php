<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function MakeMail(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'company' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'location' => 'required',
        ]);

        $data = [
            'name' => $request->name,
            'company' => $request->company,
            'email' => $request->email,
            'phone' => $request->phone,
            'location' => $request->location,
            'question' => $request->question
        ];

        Mail::to('muhamad102dafa@gmail.com')->send(new ContactMail($data));
    }
}
