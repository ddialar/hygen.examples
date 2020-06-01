# Hygen examples for PoD design pattern

## Previous steps

You must have installed [Hygen](https://www.hygen.io/quick-start) globally or locally into the project.

The needed Hygen configuration is into the `_templates/` folder.

If you have installed Hygen globally, you can run the commands defined into the [*Commands* section](#commands-section).

In the other hand, if you have installed Hygen locally in your project, I recomend to create specific scripts into the `package.json` file. These are a few proposals, depending on whether you have installed `npx` or not:

```json
{
    // Other configurations...
    "scripts": {
        // Other scripts...
        "create:pod": "npx hygen pod new",
        "create:pod": "node_modules/.bin/hygen pod new",
        "create:pod_component": "npx hygen pod component",
        "create:pod_component": "node_modules/.bin/hygen pod component",
    }
}
```

## <a id="commands-section"></a>Commands

These commands have been defined keeping in mind that you have installed Hygen globally.

- Create a new PoD
    ```sh
    hygen pod new
    ```
    The process will ask you via CLI, about the PoD's name as well as if you want to generate the scene bound to that new PoD.

    This way, it will be created the whole PoD structure into the path `src/pods/`.

    In addition, if you confirmed to create the bound scene, the specific file will be created into `src/scenes/` and a reference to this file will be injected into the `index.ts` file.

- Create a new PoD's component
    ```sh
    hygen pod component
    ```
    The process will ask you via CLI, about the PoD's name to introduce the new component as well as its name.

    A new file with the most basic component structure will be created into `src/pods/components/` folder and a reference to this file will be injected into the `index.ts` file, located in the `components/` sub-folder.