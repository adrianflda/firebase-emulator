import * as express from "express";
import GatewayController from "../controllers/GatewayController";

export default class GatewayRoutes {
    public gatewayController: GatewayController = new GatewayController();
    public router: express.Router = express.Router()

    public routes(api): any {
      this.router.get("/", this.gatewayController.list);
      this.router.post("/", this.gatewayController.create);
      this.router.get("/:id", this.gatewayController.get);
      this.router.put("/:id", this.gatewayController.update);
      this.router.delete("/:id", this.gatewayController.delete);

      api.use("/gateways", this.router);
    }
}