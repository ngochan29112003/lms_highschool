<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NhaCuaToiController extends Controller
{
    public function GetViewNhaCuaToi()
    {
        $nguoidung = DB::table('nguoi_dung')
            ->join('quyen','nguoi_dung.ma_quyen','=','quyen.ma_quyen')
            ->where('ma_nguoi_dung','=',session('ma_nguoi_dung'))
            ->first();
        return view('nha-cua-toi', compact('nguoidung'));
    }
}