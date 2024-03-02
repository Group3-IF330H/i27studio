<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Client;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Project $project)
    {
        $project = Project::with(['Category', 'Client'])->get();
        $category = Category::all();
        $client = Client::all();
        return Inertia::render('Project/ShowProject', [
            'project' => $project,
            'category' => $category,
            'client' => $client,
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
            'nama_project' => 'required',
            'id_category' => 'required',
            'id_client' => 'required',
            'file' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg,webp,bmp|max:10240',
        ]);

        $project = new Project();
        $project->nama_project = $request->nama_project;
        $project->id_category = $request->id_category;
        $project->id_client = $request->id_client;

        if ($request->hasFile('gambar_project')) {
            $foto = $request->file('gambar_project');
            $foto_nama = $foto->hashName();
            $img = Image::make($foto)->encode('webp', 70);
            $webp_name = pathinfo($foto_nama, PATHINFO_FILENAME) . '.webp';
            $img->save(storage_path('app/public/img/projects/' . $webp_name));
            $project->gambar_project = $webp_name;
        }

        $project->save();

        return redirect()->route('project.index');
    }

    /**
     * Display the specified resource.
     */
    public function show($clientName)
    {
        $projects = Project::with(['Category', 'Client'])
            ->whereHas('Client', function ($query) use ($clientName) {
                $query->where('nama_client', $clientName);
            })
            ->paginate(12);

        return Inertia::render('Project/ShowClient', [
            'projects' => $projects,
            'client' => $clientName
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project, Request $request)
    {
        return Inertia::render('Project/EditProject', [
            'myProject' => $project->with(['Category', 'Client'])->find($request->id),
            'category' => Category::all(),
            'client' => Client::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        $request->validate([
            'nama_project' => 'required',
            'id_category' => 'required',
            'id_client' => 'required',
            'file' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg,webp,bmp|max:10240',
        ]);

        $project = Project::find($request->id);

        $project->nama_project = $request->nama_project;
        $project->id_category = $request->id_category;
        $project->id_client = $request->id_client;

        if ($request->hasFile('gambar_project')) {

            if ($project->gambar_project) {
                Storage::delete('public/img/projects/' . $project->gambar_project);
                Storage::delete('public/img/projects/' . pathinfo($project->gambar_project, PATHINFO_FILENAME) . '.webp');
            }

            $foto = $request->file('gambar_project');
            $foto_nama = $foto->hashName();
            $img = Image::make($foto)->encode('webp', 70);
            $webp_name = pathinfo($foto_nama, PATHINFO_FILENAME) . '.webp';
            $img->save(storage_path('app/public/img/projects/' . $webp_name));
            $project->gambar_project = $webp_name;
        }

        $project->save();
        return redirect()->route('project.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $project = Project::find($request->id);
        if ($project->gambar_project) {
            Storage::delete('public/img/projects/' . $project->gambar_project);
            Storage::delete('public/img/projects/' . pathinfo($project->gambar_project, PATHINFO_FILENAME) . '.webp');
        }
        $project->delete();
        return redirect('/project')->with('message', 'Data Project berhasil dihapus');
    }

    public function category($categoryName)
    {
        if ($categoryName === "all") {
            $project = Project::with(['Category', 'Client'])->paginate(12);
            $projectAll = Project::with(['Category', 'Client'])->get();
        } else {
            $projects = Project::with(['Category', 'Client'])
                ->whereHas('Category', function ($query) use ($categoryName) {
                    $query->where('nama_category', $categoryName);
                })
                ->paginate(12);
            $projectAll = Project::with(['Category', 'Client'])->get();
        }

        return Inertia::render('Projects', [
            'project' => $project,
            'projectAll' => $projectAll,
            'category' => Category::all(),
            'categoryNama' => $categoryName
        ]);
    }

    public function detail ($nama_project) {
        $project = Project::with(['Category', 'Client'])
            ->where('nama_project', $nama_project)
            ->first();

        return Inertia::render('DetailProject', [
            'project' => $project
        ]);
    
    }

    public function checked(Request $request, $id)
    {
        $project = Project::findOrFail($id);
        $project->is_highlight = $request->is_checked;
        $project->save();
    }
}
