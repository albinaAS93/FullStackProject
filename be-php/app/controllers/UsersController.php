<?php

    class UsersController extends BaseController {

        public function create() {

            header("Access-Control-Allow-Origin: *");
            header("Content-Type: application/json; charset=UTF-8");
            header("Access-Control-Allow-Methods: POST");
            header("Access-Control-Max-Age: 3600");
            header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

            $request = new Request;
            $request->decodeHttpRequest();
            $data = $request->getBody();
            
            $database = new Database();
            $database->openConnection();
            
            $user = new User($database);
            
            if (!empty($data['username'])) {
        
                if ($user->create($data)) {
        
                    http_response_code(201);
                    echo json_encode(array("message" => "New user added."));
                } else {
                    http_response_code(503);
                    echo json_encode(array("message" => "User was not added."));
                }
            } else {
                http_response_code(400);
                echo json_encode(array("message" => "Error: Data is missing."));
            }

        }

        public function login() {

            header("Access-Control-Allow-Origin: *");
            header("Content-Type: application/json; charset=UTF-8");
            header("Access-Control-Allow-Methods: POST");
            header("Access-Control-Max-Age: 3600");
            header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

            $request = new Request;
            $request->decodeHttpRequest();
            $data = $request->getBody();
            
            $database = new Database();
            $database->openConnection();
            
            $user = new User($database);
            $boh = $user->login($data);
            
            if (!empty($data['username'])) {
                if ($user->login($data)) {
                    http_response_code(200);
                    echo json_encode(array("message" => "1"));
                    exit;
                } else {
                    http_response_code(200);
                    echo json_encode(array("message" => "0"));
                    exit;
                }
            } else {
                http_response_code(400);
                echo json_encode(array("message" => "Error: Data is missing."));
                exit;
            }

        }

        public function read() {

            header("Access-Control-Allow-Origin: *");
            header("Content-Type: application/json; charset=UTF-8");
            header("Access-Control-Allow-Methods: GET");
            header("Access-Control-Max-Age: 3600");
            header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

            $request = new Request;
            $request->decodeHttpRequest();

            $database = new Database();
            $database->openConnection();

            $user = new User($database);

            $recordset = $user->selectAll();

            if ($recordset !== false) {
                http_response_code(201);
                echo json_encode($recordset);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "No user founded."));
            }

        }
    }
?>