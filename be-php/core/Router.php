<?php

    include_once './app/controllers/BaseController.php';
    include_once './app/controllers/CitiesController.php';
    include_once './app/controllers/FlightsController.php';
    include_once './app/controllers/UsersController.php';

    class Router
    {
        protected $routes;

        function load($routes)
        {          
            $this->routes = $routes;
        }

        public function direct($path, $method)
        {
                // il path potrebbe essere variabile
                // eg: flights/:id -> flights/123

            $resolver = null;
            $parameters = array();
            foreach ($this->routes[$method] as $routePath => $routeResolver) {

                $regex = "/^{$routePath}$/";

                if (preg_match($regex, $path, $matches) === 1) {

                        // ho trovato la rotta! Yeee!

                    $resolver = $routeResolver;
                    $parameters = $matches;

                    break;
                }
            }

            if ($resolver === null) {

                http_response_code(404);
                echo json_encode(array("message" => "No route defined for this path! method: {$method} path: {$path}"));

                return;
            }

            // $res = explode('@', $resolver);
            // $controller = $res[0];
            // $action = $res[1];

            list ($controller, $action) = explode('@', $resolver);

            return $this->action($controller, $action, $parameters);

            // return $this->action(
            //     ...explode('@', $resolver)
            // );

            // if (array_key_exists($path, $this->routes[$method])) {

            //     return $this->action(
            //         ...explode('@', $this->routes[$method][$path])
            //     );
                
            // } else {
            //     http_response_code(404);
            //     echo json_encode(array("message" => "No route defined for this path! method: {$method} path: {$path}"));
            // }
        }

        protected function action($controller, $action, $parameters)
        {

            $controller = new $controller();

            if (! method_exists($controller, $action)) {
                throw new Exception("{$controller} does not respond to action {$action} action.");
            }

            return $controller->$action($parameters);
        }
    }
