import { Injectable, InjectionToken, Inject } from '@angular/core';

export const SERVER_API_BASE_URL = new InjectionToken<string>('MTS Server API base URL');
export const SERVER_FILE_BASE_URL = new InjectionToken<string>('MTS Server file base URL');

@Injectable()
export class ServerService {
  constructor(
    @Inject(SERVER_API_BASE_URL) public readonly apiBase: string,
    @Inject(SERVER_FILE_BASE_URL) public readonly fileBase: string
  ) {
    if (!this.apiBase.endsWith('/')) {
      this.apiBase += '/';
    }
    if (!this.fileBase.endsWith('/')) {
      this.fileBase += '/';
    }
  }

  get apiBaseAbsolute(): string {
    return new URL(this.apiBase, `${document.location}`).href;
  }
  get fileBaseAbsolute(): string {
    return new URL(this.fileBase, `${document.location}`).href;
  }

  isApiUrl(url: string): boolean {
    return url.startsWith(this.apiBase);
  }
  isFileUrl(url: string): boolean {
    return url.startsWith(this.fileBase);
  }

  api(path: string): string {
    if (path.startsWith('/')) {
      path = path.substr(1);
    }
    return this.apiBase + path;
  }

  file(path: string): string {
    if (path.startsWith('/')) {
      path = path.substr(1);
    }
    return this.fileBase + path;
  }
}
