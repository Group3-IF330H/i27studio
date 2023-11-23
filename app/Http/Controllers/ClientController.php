<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

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
    // public function store(ClientRequest $clientRequest)
    // {
    //     $validated = $clientRequest->validated();
    //     $client = new Client();
    //     $client->nama_client = $validated['nama_client'];
    //     $client->lokasi_client = $validated['lokasi_client'];
    //     $client->logo_client = isset($validated['logo_client']) ? $validated['logo_client'] : "";
    //     $client->save();
    //     return redirect('/client');
    // }

    public function store(Request $request)
    {
        $request->validate([
            'nama_client' => 'required',
            'lokasi_client' => 'required',
            'file' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg,webp,bmp|max:10240',

        ]);

        ddd($request);

        $client = new Client();
        $client->nama_client = $request->nama_client;
        $client->lokasi_client = $request->lokasi_client;
        $client->logo_client =  $request->logo_client;
        $client->save();
        return redirect('/client');
    }

    // public function store(Request $request)
    // {
    //     $request->validate([
    //         'nama_client' => 'required',
    //         'lokasi_client' => 'required',
    //         'logo_client' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg,webp,bmp|max:10240',
    //     ]);

    //     $client = new Client();
    //     $client->nama_client = $request->nama_client;
    //     $client->lokasi_client = $request->lokasi_client;

    //     $file = $request->logo_client;
    //     $filename = pathinfo($file, PATHINFO_FILENAME);
    //     $extension = pathinfo($file, PATHINFO_EXTENSION);
    //     $concatFileName = str_replace(' ', '', ucwords($filename) . '.' . $extension);

    //     // $file->storeAs(public_path('client'), $concatFileName . "." . $extension);
    //     // $client->logo_client = $concatFileName . "." . $extension;
    //     $client->logo_client = $request->logo_client;
    //     $client->save();

    //     return redirect('/client');
    // }

    /**
     * Display the specified resource.
     */
    public function show(Client $client)
    {
        $client = Client::all();
        return Inertia::render('Client/Show', [
            'client' => $client,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client, Request $request)
    {
        return Inertia::render('Client/Edit', [
            'myClient' => $client->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        Client::where('id', $request->id)->update([
            'nama_client' => $request->nama_client,
            'lokasi_client' => $request->lokasi_client,
            'logo_client' => $request->logo_client,
        ]);
        return redirect('/client');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $client = Client::find($request->id);
        $client->delete();
        return redirect()->back()->with('message', 'Data Client berhasil dihapus');
    }
}
