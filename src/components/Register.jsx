import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <div className="product-cl1">
        <h1>Lgin</h1>
        <p>
          <Link className="product-link" to="/">
            Home
          </Link>{" "}
          / Register
        </p>
      </div>
      <form action="" className="register-sec">
        <div class="form-outline" data-mdb-input-init>
          <input type="text" id="typeText" class="form-control" />
          <label class="form-label" for="typeText">
            Text input
          </label>
        </div>
      </form>
    </div>
  );
}
