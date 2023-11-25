<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Employee $employee)
    {
        $employee = Employee::all();
        return Inertia::render('Team/ShowTeam', [
            'team' => $employee
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'role' => 'required',
            'file' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg,webp,bmp|max:10240',
        ]);

        $employee = new Employee();
        $employee->nama = $request->nama;
        $employee->jabatan = $request->role;

        if ($request->hasFile('foto')) {
            $foto = $request->file('foto');
            $foto_nama = $foto->hashName();
            $img = Image::make($foto)->encode('webp');
            $webp_name = pathinfo($foto_nama, PATHINFO_FILENAME) . '.webp';
            $img->save(storage_path('app/public/img/team/' . $webp_name));
            $employee->foto = $webp_name;
        }

        $employee->save();

        return redirect()->route('team.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee, Request $request)
    {
        return Inertia::render('Team/EditTeam', [
            'myTeam' => $employee->find($request->id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee)
    {
        $request->validate([
            'nama' => 'required',
            'jabatan' => 'required',
            'file' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg,webp,bmp|max:10240',
        ]);

        $employee = Employee::find($request->id);

        $employee->nama = $request->nama;
        $employee->jabatan = $request->jabatan;

        if ($request->hasFile('foto')) {

            if ($employee->foto) {
                Storage::delete('public/img/team/' . $employee->foto);
                Storage::delete('public/img/team/' . pathinfo($employee->foto, PATHINFO_FILENAME) . '.webp');
            }

            $foto = $request->file('foto');
            $foto_nama = $foto->hashName();
            $img = Image::make($foto)->encode('webp');
            $webp_name = pathinfo($foto_nama, PATHINFO_FILENAME) . '.webp';
            $img->save(storage_path('app/public/img/team/' . $webp_name));
            $employee->foto = $webp_name;
        }
        $employee->save();

        return redirect()->route('team.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $employee = Employee::find($request->id);
        if ($employee->foto) {
            Storage::delete('public/img/team/' . $employee->foto);
            Storage::delete('public/img/team/' . pathinfo($employee->foto, PATHINFO_FILENAME) . '.webp');
        }
        $employee->delete();
        return redirect('/team')->with('message', 'Data Team berhasil dihapus');
    }
}
