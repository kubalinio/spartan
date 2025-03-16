import { convertNxGenerator } from '@nx/devkit';
import migrateHelmLibrariesGenerator from './generator';

export default convertNxGenerator(migrateHelmLibrariesGenerator);
