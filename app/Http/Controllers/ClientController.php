<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Client $client)
    {
        $client = Client::all();
        return Inertia::render('Client/Show', [
            'client' => $client,
        ]);
    }

    /* 
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama_client' => 'required',
            'lokasi_client' => 'required',
            'file' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg,webp,bmp|max:10240',
        ]);

        $client = new Client();
        $client->nama_client = $request->nama_client;
        $client->lokasi_client = $request->lokasi_client;

        if ($request->hasFile('logo_client')) {
            $foto = $request->file('logo_client');
            $foto_nama = $foto->hashName();
            $img = Image::make($foto)->encode('webp');
            $webp_name = pathinfo($foto_nama, PATHINFO_FILENAME) . '.webp';
            $img->save(storage_path('app/public/img/clients/' . $webp_name));
            $client->logo_client = $webp_name;
        }


        $client->save();
        return redirect('/client');
    }


    /**
     * Display the specified resource.
     */
    public function show()
    {
        //
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
        // Client::where('id', $request->id)->update([
        //     'nama_client' => $request->nama_client,
        //     'lokasi_client' => $request->lokasi_client,
        //     'logo_client' => $request->logo_client,
        // ]);
        // return redirect('/client');
        $request->validate([
            'nama_client' => 'required',
            'lokasi_client' => 'required',
            'file' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg,webp,bmp|max:10240',
        ]);

        $client = Client::find($request->id);

        $client->nama_client = $request->nama_client;
        $client->lokasi_client = $request->lokasi_client;

        if ($request->hasFile('logo_client')) {

            if ($client->logo_client) {
                Storage::delete('public/img/clients/' . $client->logo_client);
                Storage::delete('public/img/clients/' . pathinfo($client->logo_client, PATHINFO_FILENAME) . '.webp');
            }

            $foto = $request->file('logo_client');
            $foto_nama = $foto->hashName();
            $img = Image::make($foto)->encode('webp');
            $webp_name = pathinfo($foto_nama, PATHINFO_FILENAME) . '.webp';
            $img->save(storage_path('app/public/img/clients/' . $webp_name));
            $client->logo_client = $webp_name;
        }

        $client->save();
        return redirect('/client');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $client = Client::find($request->id);
        if ($client->logo_client) {
            Storage::delete('public/img/clients/' . $client->logo_client);
            Storage::delete('public/img/clients/' . pathinfo($client->logo_client, PATHINFO_FILENAME) . '.webp');
        }
        $client->delete();
        return redirect()->back()->with('message', 'Data Client berhasil dihapus');
    }
}
