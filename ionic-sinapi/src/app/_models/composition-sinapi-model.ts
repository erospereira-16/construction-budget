import { ClassSinapi } from "./class-sinapi-model";
import { CompositionInputSinapi } from "./composition-input-sinapi-model";
import { TechnicalNotebook } from "./technical-notebook-model";
import { TypeSinapi } from "./type-sinapi-model";
import { UnitOfMeasurementSinapi } from "./unit-of-measurement-sinapi-model";

export class CompositionSinapi {
    id: number | undefined;
    description: string | undefined;
    code: string | undefined;
    unitOfMeasurementSinapi: UnitOfMeasurementSinapi | undefined;
    classSinapi: ClassSinapi | undefined;
    technicalNotebook: TechnicalNotebook | undefined;
    typeSinapi: TypeSinapi | undefined;
    macroClassGroup: string | undefined;
    typeId: number | undefined;
    classId: number | undefined;
    unitOfMeasurementId: number | undefined;
    compositionsInputsSinapi: CompositionInputSinapi[] = [];
}
