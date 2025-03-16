import { migrateHelmLibrariesGenerator } from '../../migrate-helm-libraries/generator';
import { Healthcheck, HealthcheckSeverity } from '../healthchecks';

export const updateHelmLibrariesHealthcheck: Healthcheck = {
	name: 'Spartan - Helm Libraries',
	async detect(_, failure) {
		failure('Regenerate Helm libraries with the latest updates.', HealthcheckSeverity.Warning, true);
	},
	fix: async (tree, { angularCli }) => {
		await migrateHelmLibrariesGenerator(tree, { angularCli });
		return true;
	},
	prompt: 'Would you like to regenerate Helm libraries with the latest updates?',
};
