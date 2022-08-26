<?php

    class FlightsController extends BaseController {

        public function read($parameters) {
            
            $this->outputHeadersFroMethod('GET');

            $request = new Request;
            $request->decodeHttpRequest();
            
            $database = new Database();
            $database->openConnection();
            
            $flight = new Flight($database);
            
            $recordset = $flight->selectAll();
            
            if ($recordset !== false) {
                http_response_code(201);
                echo json_encode($recordset);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "No flights founded."));
            }
        }

        public function create() {

            $this->outputHeadersFroMethod('POST');

            $request = new Request;
            $request->decodeHttpRequest();
            $data = $request->getBody();
            
            $database = new Database();
            $database->openConnection();
            
            $flight = new Flight($database);
            
            if (
                !empty($data['departure']) &&
                !empty($data['arrival']) &&
                !empty($data['availableSeats'])
            ) {
                if ($flight->create($data)) {
                    http_response_code(201);
                    echo json_encode(array("message" => "A new flight has been added"));
                } else {
                    http_response_code(503);
                    echo json_encode(array("message" => "Flight was not added."));
                }
            } else {
                http_response_code(400);
                echo json_encode(array("message" => "Error: Data is missing."));
            }

        }

        public function delete($parameters) {

            $id = (int)$parameters[1];

            $this->outputHeadersFroMethod('DELETE');

            $request = new Request;
            $request->decodeHttpRequest();
            
            $database = new Database();
            $database->openConnection();
            
            $flight = new Flight($database);
            
            if ($id < 0) {
                $this->outputResponseWithMessage(400, "Error: Data is missing.");
            }

            if ($flight->delete($id) === true) {

                $this->outputResponseWithMessage(200, "Flight has been deleted.");

            } else {
                $this->outputResponseWithMessage(503, "Flight was not deleted.");
            }

        }

        public function update() {

            $this->outputHeadersFroMethod('UPDATE');

            $request = new Request();
            $request->decodeHttpRequest();
            $data = $request->getBody();
            
            $database = new Database();
            $database->openConnection();
            
            $flight = new Flight($database);
            
            if (empty($data['id']) && empty($data['availableSeats'])) {
                $this->outputResponseWithMessage(400, "Error: Data is missing.");
            }

            if ($flight->update($data)) {
                $this->outputResponseWithMessage(200, "Flight has been updated.");
            } else {
                $this->outputResponseWithMessage(503, "Flight was not updated.");
            }

            // if (
            //     !empty($data['id']) &&
            //     !empty($data['availableSeats'])
            // ) {
            //     if ($flight->update($data)) {
            //         http_response_code(200);
            //         echo json_encode(array("message" => "Flight has been updated."));
            //     } else {
            //         http_response_code(503);
            //         echo json_encode(array("message" => "Flight was not updated."));
            //     }
            // } else {
            //     http_response_code(400);
            //     echo json_encode(array("message" => "Error: Data is missing."));
            // }
        }
    }
