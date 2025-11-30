const API_URL = 'http://localhost:3001/api';

export const api = {
    async getAll(resource: string) {
        try {
            const res = await fetch(`${API_URL}/${resource}`);
            if (!res.ok) throw new Error(`Failed to fetch ${resource}`);
            return await res.json();
        } catch (err) {
            console.error(err);
            return [];
        }
    },

    async saveAll(resource: string, data: any[]) {
        try {
            const res = await fetch(`${API_URL}/${resource}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!res.ok) throw new Error(`Failed to save ${resource}`);
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    },

    async getLastModified() {
        try {
            const res = await fetch(`${API_URL}/last-modified`);
            if (!res.ok) throw new Error('Failed to fetch status');
            return await res.json();
        } catch (err) {
            console.error(err);
            return {};
        }
    }
};
