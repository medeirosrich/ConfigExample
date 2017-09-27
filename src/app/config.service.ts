import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

export interface Config {
    EnableConsoleLogging: boolean;
    WebApiBaseUrl: string;
}

@Injectable()
export class ConfigService {
    private config: Config;

    constructor(private http: Http) { }

    public getConfigSettings(): Config {
        if (!this.config) {
            var Httpreq = new XMLHttpRequest();
            Httpreq.open("GET", 'config.json', false);
            Httpreq.send(null);

            this.config = JSON.parse(Httpreq.responseText);

            if (this.config.EnableConsoleLogging)
                console.log("Config loaded", this.config);
        }

        return this.config;
    }
}