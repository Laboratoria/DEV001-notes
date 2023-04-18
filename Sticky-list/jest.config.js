module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        "^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
        "^[./a-zA-Z0-9$_-]+\.png$": "<rootDir>/RelativeImageStub.js",
        "module_name_(.*)": "<rootDir>/substituted_module_$1.js"
    }

}