<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /* 
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $client = new Client();
        $client->nama_client = $request->nama_client;
        $client->lokasi_client = $request->lokasi_client;
        $client->logo_client = $request->logo_client;
        $client->save();
        return redirect()->back()->with('message', 'Data client telah masuk!');

    }

    /**
     * Display the specified resource.
     */
    public function show(Client $client)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client, Request $request)
    {
        return Inertia::render('EditClient', [
            'myClient' => $client->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        Client::where('id', $request->id)->update([
            'nama_client'=> $request->nama_client,
            'lokasi_client'=>$request->lokasi_client,
            'logo_client'=>$request->logo_client,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $client = Client::find($request->id);
        $client = delete();
        return redirect()->back()->with('message', 'Data Client berhasil dihapus');
    }
}
