interface App {
    listen(port: number, onInit: () => void): void;
}

export default async function start(app: App, appPort: number): Promise<void> {
    app.listen(appPort, () => {
        console.log(`I'm listening on port ${appPort}`);
    });
}