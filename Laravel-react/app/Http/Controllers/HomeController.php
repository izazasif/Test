<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Category;
use App\News;
class HomeController extends Controller
{   

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
     
        return view('home');
    }

    public function view()
    {
     $data = DB::table('category')->get();
     return response()->json($data,201);
    }

    public function store(Request $request)
    
    {
       
        $data = Category::create($request->all());
        return response()->json($data,201);
    }
    
    public function update(Request $request,$id)
    {
        
        $data = Category::findOrFail($id);
        $data->update($request->all());
        return response()->json($data,201);
    }

    public function destroy($id)
    {
        $data = Category::findOrFail($id);
         $data->delete();
        return response()->json(null,204);
    }
    
    public function show()
    {
     $data = DB::table('news')->get();
     return response()->json($data,201);
    }

    public function add_news(Request $request)
    {
        
        
        $image = $request->file('image');
        $Image = date('H-m-s').".".$image->getClientOriginalExtension();
        $image->move('images/new/', $Image);

        $data = new News();
        
        $data->title = $request->title;

        $data->category_id = $request->category;

        $data->description = $request->description;

        $data->author = $request->author;

        $data->image = $Image;
        
        $data->save();
        
        return response()->json($data,201);
    }
}
