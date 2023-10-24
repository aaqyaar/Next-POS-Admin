/**
 * Dynamically add routes based on the list defined in ./routes.ts,
 * can be customized to meet your use case
 */
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { PATHS } from "./paths";
import { NotFound } from "pages";

export const Router = () => {
  return (
    <Routes>
      {routes.map(({ guard, component, layout, path, isPublic }) => {
        const Guard = guard || React.Fragment;
        const Layout = layout || React.Fragment;
        const Component = component;
        return isPublic ? (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        ) : (
          <Route key={path} element={<Guard />}>
            <Route
              key={path}
              path={path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          </Route>
        );
      })}

      <Route path="*" element={<NotFound />} />

      <Route
        path="/"
        element={<Navigate to={PATHS.dashboard.root} replace={true} />}
      />
      <Route
        path="/dashboard"
        element={<Navigate to={PATHS.dashboard.root} replace={true} />}
      />
      <Route
        path="/admin"
        element={<Navigate to={PATHS.dashboard.root} replace={true} />}
      />
    </Routes>
  );
};
