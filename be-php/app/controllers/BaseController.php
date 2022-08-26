<?php

    include_once 'core/bootstrap.php'; 

    abstract class BaseController {
    
        protected function outputHeadersFroMethod($method) {

            header("Access-Control-Allow-Origin: *");
            header("Content-Type: application/json; charset=UTF-8");
            header("Access-Control-Allow-Methods: {$method}");
            header("Access-Control-Max-Age: 3600");
            header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        }

        protected function outputResponse($code, $payload) {

            http_response_code($code);
            echo json_encode($payload);
        }

        protected function outputResponseWithMessage($code, $message) {

            // http_response_code($code);
            // echo json_encode(['message' => $message]);

            $this->outputResponse($code, ['message' => $message]);
        }
    }
